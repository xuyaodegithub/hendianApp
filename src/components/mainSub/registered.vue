<template>
  <div class="registered">
    <div class="topInput">
      <mt-field label="账号" placeholder="请输入6-16位由字母数字组成的账号" v-model="isNumber"></mt-field>
      <mt-field label="密码" placeholder="请输入内容" v-model="isPassword" type="password"></mt-field>
      <mt-field label="姓名" placeholder="请输入内容" v-model="isName"></mt-field>
      <mt-field label="身份证" placeholder="请输入内容" v-model="isShen"></mt-field>
      <mt-field label="联系方式" placeholder="请输入内容" type="tel" v-model="isPhone" :attr="{ maxlength: 11 }"></mt-field>
      <mt-field label="家庭住址" placeholder="请输入内容" type="text" v-model="isAdress"></mt-field>
      <mt-field label="申请职务" placeholder="请选择职位" type="text" v-model="isObj" @click.native="alertSelect()" disabled style="color:#000000;"></mt-field>
      <mt-field label="藏品门类" placeholder="请选择职位" type="text" v-model="isClassCP" @click.native="alertSelect2()" disabled style="color:#000000;"></mt-field>
      <!--<select name="" id="select">-->
      <!--<option value="会员" selected></option>-->
      <!--<option value="理事"></option>-->
      <!--<option value="常务理事"></option>-->
      <!--<option value="理事单位"></option>-->
      <!--<option value="副会长"></option>-->
      <!--</select>-->
      <mt-field label="单位名称" placeholder="请输入内容" type="text" v-model="isAdd"></mt-field>
      <mt-field label="介绍人" placeholder="请输入内容" type="text" v-model="promoters"></mt-field>
      <mt-field label="介绍人联系方式" placeholder="请输入内容" type="text" v-model="promotersPhone"></mt-field>
      <mt-field label="协会拓展人" placeholder="请输入内容" type="text" v-model="introducer"></mt-field>
      <mt-cell title="加入时间" :value="titvale | changeTime(titvale)" @click.native="showDatapick()"></mt-cell>
      <div>
        <img :src="imgurl" alt="">
        <p>请用支付宝或微信扫二维码缴纳会费</p>
        <p>注意：转账时请备注电话号码以及单位信息</p>
      </div>
    </div>
   <!-- <div class="alertShow" v-if="isShow">
      <div v-for="(item,index) in options" @click="choseObj(item)">
        {{item.value}}
      </div>
    </div>
    <div class="zhezhao" v-if="isShow" @click="close()">

    </div>-->
    <mt-datetime-picker
      v-model="pickerVisible"
      type="date"
      ref="datapick"
      @confirm="handleConfirm"
      @cancel="handleConfirm2"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker>
    <mt-actionsheet
      :actions="actions"
      v-model="isShow">
    </mt-actionsheet>
    <mt-actionsheet
      :actions="actions2"
      v-model="isShow2">
    </mt-actionsheet>
    <mt-button type="primary" size="small" @click.native="handleClick" :disabled="startTime>0">提交注册
      <i v-if="startTime>0">({{startTime}})</i>
    </mt-button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import {Base64} from 'js-base64';
  import { Toast } from 'mint-ui';
  export default {
    name: 'registered',
    data() {
      return {
        halde(e){
          e.preventDefault()
        },
        isNumber: '',
        isShow:false,
        isShow2:false,
        isPassword: '',
        company: '',
        isName: '',
        isShen: '',
        isPhone: '',
        isAdress: '',
        isObj: '',
        isClassCP:'',
        isAdd: '',
        imgurl: 'static/money.jpg',
        startTime:0,
        introducer:'',
        promotersPhone:'',
        promoters:'',
        pickerVisible:'',
        titvale:'马上完善',
        actions:[
          {name:'会员',method:this.tochose},
          {name:'理事',method:this.tochose},
          {name:'常务理事',method:this.tochose},
          {name:'理事单位',method:this.tochose},
          {name:'副会长',method:this.tochose},
        ],
        actions2:[
          {name:'瓷器',method:this.tochose2},
          {name:'字画',method:this.tochose2},
          {name:'珠宝玉器',method:this.tochose2},
          {name:'金属器',method:this.tochose2},
          {name:'钱币',method:this.tochose2},
          {name:'宗教艺术',method:this.tochose2},
          {name:'杂项',method:this.tochose2},
        ],
        options: [{
          value: '会员',
          label: '会员'
        }, {
          value: '理事',
          label: '理事'
        }, {
          value: '常务理事',
          label: '常务理事'
        }, {
          value: '理事单位',
          label: '理事单位'
        }, {
          value: '副会长',
          label: '副会长'
        }],
      }
    },
    components: {},
    activated(){
      this.isNumber=''
      this.isPassword=''
      this.company=''
      this.isName=''
      this.isShen=''
      this.isPhone=''
      this.isAdress=''
      this.isObj=''
      this.promoters=''
      this.introducer=''
      this.promotersPhone=''
    },
    filters:{
changeTime(val,titvale){
  if(val && titvale !=='马上完善'){
    let data=val
    let year=data.getFullYear()
    let month=data.getMonth()+1
    let day= data.getDate()
//    let hour= data.getHours()
//    let min=data.getMinutes()
//    let sec=data.getSeconds()
    if(month.length<2){
      month='0'+month
    }
    //console.log(year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec)
    // return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec
    if(month<10){
      month='0'+month
    }
    if(day<10){
      day='0'+day
    }
    return year+'-'+month+'-'+day
  }else{
    return '马上完善'
  }
}
    },
    methods: {
      ...mapActions([
        'joinusAction'
        ]),
      tochose(val){
        this.isObj=val.name
      },
      tochose2(val){
        this.isClassCP=val.name
      },
      handleClick() {
        let reg = /[A-Za-z0-9]{6,16}/
        let _self = this
        this.setTimer()
        if (reg.test(this.isNumber) && this.isNumber.length <= 16) {
          this.$http.get('http://116.62.79.0/picture_server/api/checkLoginName', {
            params: {loginName: _self.isNumber}
          }).then(res => {
            if (res.data.code == 0) {
              this.upload()
            } else {
//              this.$message({
//                message: res.data.msg,
//                type: 'error'
//              })
              Toast({
                message: res.data.msg,
                position: 'middle',
                duration: 3000
              });
            }
          })

        } else {
//          this.$message({
//            message: '账号格式错误',
//            type: 'error'
//          })
          Toast({
            message: '账号格式错误',
            position: 'middle',
            duration: 3000
          });
        }
      },
      setTimer() {
        this.startTime = 5
        let _self = this
        this.timer = setInterval(function () {
          _self.startTime--
          if (_self.startTime === 0) {
            clearInterval(_self.timer)
          }
        }, 1000)
      },
      upload() {
        if (Base64.extendString) {
          Base64.extendString();
          let data = {
            name: Base64.encode(this.isName),
            //name:this.isName.toBase64(),
            cardNo: Base64.encode(this.isShen),
            //cardNo:this.isShen.toBase64(),
            company: Base64.encode(this.isAdd),
            // company:this.isAdd.toBase64(),
            mobile: Base64.encode(this.isPhone),
            //mobile:this.isPhone.toBase64(),
            address: Base64.encode(this.isAdress),
            //  address:this.isAdress.toBase64(),
            job: Base64.encode(this.isObj),
            //  job:this.isObj.toBase64(),
            passwork: Base64.encode(this.isPassword),
            loginName: Base64.encode(this.isNumber),
            introducer:Base64.encode(this.introducer),
            promoters:Base64.encode(this.promoters),
            promotersPhone:Base64.encode(this.promotersPhone),
            category:Base64.encode(this.isClassCP),
          }
          if (!this.isName.trim() || !data.cardNo || !data.company || !data.mobile || !data.address || !data.job || !data.passwork  || !data.category) {
//            this.$message({
//              message: '请把信息填写完整',
//              type: "error"
//            })
            Toast({
              message: '请把信息填写完整',
              position: 'middle',
              duration: 3000
            });
          } else {
            if (this.isShen.length === 10 || this.isShen.length === 15 || this.isShen.length === 18) {
              this.upOrNo = true
            } else {
              this.upOrNo = false
            }
            if (this.isPhone.length === 11) {
              this.upOrNo2 = true
            } else {
              this.upOrNo2 = false
            }
            if (this.upOrNo && this.upOrNo2) {
              this.joinusAction(data)
            } else {
//              this.$message({
//                message: '身份证或手机号格式错误',
//                type: 'error'
//              })
              Toast({
                message: '身份证或手机号格式错误',
                position: 'middle',
                duration: 3000
              });
            }
          }
        }
      },
      alertSelect() {
        this.isShow=true
      },
      alertSelect2() {
        this.isShow2=true
      },
      choseObj(val){
        this.isObj=val.value
        this.isShow=false
      },
      close(){
        this.isShow=false
      },
      showDatapick(){
        this.$refs.datapick.open();
        document.getElementsByTagName('body')[0].addEventListener('touchmove',this.halde,{passive:false})
      },
      handleConfirm(){
       this.titvale = this.pickerVisible
        document.getElementsByTagName('body')[0].removeEventListener('touchmove',this.halde,{passive:false})
      },
      handleConfirm2(){
        document.getElementsByTagName('body')[0].removeEventListener('touchmove',this.halde,{passive:false})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .registered {
    text-align: left;
    /**/
    .topInput{
      padding:0.15rem 0.3rem;
    }
    img {
      display: block;
      width: 3rem;
      height: 3rem;
      margin: 0 auto;
      margin-top: 0.4rem;
    }
    p {
      text-align: center;
      font-size: 0.28rem;
      line-height: 0.52rem;
      &:last-child {
        color: #E51C23;
      }
    }
    .mint-button--small {
      display: block;
      width: 30%;
      margin: 0 auto;
      margin-top: 0.5rem;
    }
  }

  .alertShow {
    width: 100%;
    font-size: 0.28rem;
    line-height: 0.56rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    padding: 0.2rem;
    background: #666666;
    color: #ffffff;
    z-index: 1000;
    transition: all 0.5s linear;
  }
  .zhezhao{
    position: fixed;
    height:100%;
    width:100%;
    background-color: #000000;
    opacity: 0.3;
    top:0;
  }
</style>
