const  mutations={
  changeAlert(state,where){
    state.page.popoverAlive.openOrClose = !state.page.popoverAlive.openOrClose;
    if (typeof where == "object") {
      state.page.popoverAlive.title = where[0];
    }else if(typeof where == "string"){
      state.page.popoverAlive.title = where;
    }
    if(typeof where == "object" && where.length>=2){
      state.page.popoverAlive.SSSnum = where[1];
    }
  },
}

export default mutations
