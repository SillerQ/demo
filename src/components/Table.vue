<template>
    <div class="table-view">
        <div class="tit">
            <div></div>
            <div>套数（户）</div>
            <div>面积（万㎡）</div>
            <div>金额（亿元）</div>
            <div>套数（户）</div>
        </div>
        <div class="list" v-for="(tr, index) in listData" :key="'tr'+index">
            <div>{{tr.tit}}</div>
            <div>{{tr.a}}</div>
            <div>{{tr.b}}</div>
            <div>{{tr.c}}</div>
            <div>{{tr.d}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        listData: Array
    }
};
</script>

<style lang="less">
.table-view {
    font-size: 1rem;
    // overflow-x: scroll;
    overflow-y: hidden;
    .tit,
    .list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        line-height: 3em;
        text-indent: 3em;
        div {
            flex: 1;
            min-width: 136px;
        }
    }
    .tit {
        color: #81868d;
    }
    .list {
        &:nth-child(2n) {
            // background-color: #f6f9fb;
            & > div {
                background-color: #f6f9fb;
            }
        }
    }
}
@media (max-width: 812px) {
    .table-view {
        font-size: 0.9rem;
    }
}
</style>

