var sb = new Vue({
    el: '#searchBarALL',
    data: {
        searchBarPage: false,
        searchBarBg: false,
    },
    methods: {
        searchBarOpen(){
            this.searchBarPage = true;
            this.searchBarBg = true;
        },
        searchBarClose(){
            this.searchBarPage = false;
            this.searchBarBg = false;
        },
    },
});
