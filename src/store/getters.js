const getters={
//弹框属性输出
  popoverAlive: state => {
    return state.page.popoverAlive
  },
  videoResult: state => {
    return state.page.videoUrl
  }
}

export default getters
