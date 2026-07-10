const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmw7150cne/",
            name: "ssmw7150cne",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmw7150cne/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SSM框架的校园活动管理系统设计与实现"
        } 
    }
}
export default base
