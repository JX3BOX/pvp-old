<template>
    <div class="m-pvx-nav">
        <RightSideMsg>
            <em>PVP交流群</em> :
            <strong>
                <a href="https://jq.qq.com/?_wv=1027&k=7MdgoSNs">769948201</a>
            </strong>
        </RightSideMsg>

        <el-menu :default-openeds="['1']">
            <el-submenu index="1">
                <template slot="title">阵营</template>
                <el-menu-item-group>
                    <el-menu-item index="1-2" :class="{ 'is-active': active == 'sandbox' }">
                        <router-link to="/sandbox"> <i class="el-icon-data-line"></i>沙盘查询</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Nav",
    props: [],
    components: {},
    data: function () {
        return {
            active: "sandbox",
        };
    },
    computed: {},
    watch: {},
    methods: {
        // getAppType: function () {
        //     let arr = location.pathname?.split("/");
        //     let type = "";
        //     for (let str of arr) {
        //         if (str && str != "pvp") {
        //             type = str;
        //             break;
        //         }
        //     }
        //     return type;
        // },
        // getAppLink: function (appKey) {
        //     let isDev = location.hostname == "localhost";
        //     if (isDev) {
        //         return `/${appKey}/`;
        //     } else {
        //         return `/pvp/${appKey}/`;
        //     }
        // },
    },
    filters: {},
    created: function () {
        // this.active = this.getAppType();
    },
    mounted: function () {},
};
</script>

<style lang="less">
@import "~@/assets/css/nav.less";
</style>
