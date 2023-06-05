//封装分类数据业务相关代码
import { onBeforeRouteUpdate } from 'vue-router' 
import { getCategoryAPI } from "@/apis/category"
import { onMounted,ref } from "vue";
import { useRoute } from "vue-router";

export function useCategory(){
    //获取分类数据
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async(id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    //目标：路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=> {
    //使用最新的路由参数请求最新分类内容
    getCategory(to.params.id)
    })

    return{
        categoryData
    }

}