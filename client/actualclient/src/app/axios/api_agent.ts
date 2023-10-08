import axios, { AxiosError, AxiosResponse } from "axios"
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5231/api/"

//ya desestructura ACA/pordefecto todas las peticiones, asi da la data directo
const resBody = (res: AxiosResponse) => res.data;

axios.interceptors.response.use(response => {
    return response;
}, (err: AxiosError) => {
    // console.log(err ,"agarrado en axiosINTERCEPTOR");
    console.log("agarrado en axiosINTERCEPTOR, para que NO sea uncught, tenes que agregar un catch DESDE donde llamas a la API / el cliente");
    const {data, status} = err.response as AxiosResponse;

    switch (status) {
        case 400:
            // if(data.errors){
            //     const modelStateErrors: string[] = [];
            //     for (const key in data.errors) {
            //         if ( data.errors[key] ) {
            //             modelStateErrors.push(data.errors[key]);
            //         }
            //     }
            //     throw modelStateErrors.flat()
            // }
            toast.error(`${status} bad req`)
            break;
        case 401:
            toast.error(`${status} unauthorized`)
            break;
        case 404:
            toast.error(data.title)
            break;
        case 500:
            toast.error(data.title)
            // ruter.navigate("/server-error", {state: {error: data} })
            break;
        default: 
            break
    }

    return Promise.reject(err.response);
})

const requests = {
    get: (url: string) => axios.get(url).then(resBody),
    post: (url: string, body: {}) => axios.post(url).then(resBody),
    put: (url: string, body: {}) => axios.put(url).then(resBody),
    delete: (url: string) => axios.delete(url).then(resBody),
}

const Catalog = {
    list: () => requests.get("products"),
    details: (id: number) => requests.get(`products/${id}`)
}
const TestErrors = {
    get400Error: () => requests.get("Errors/bad-request"),
    get401Error: () => requests.get("Errors/unathourized"),
    get404Error: () => requests.get("Errors/not-found"),
    get500Error: () => requests.get("Errors/server-error"),
    getValidationError: () => requests.get("Errors/validation-error"),
}

const API = {
    Catalog,
    TestErrors
}
export default API

// http://localhost:5231/api/Errors/unathourized






//Algo siempre me recuerda a vos
//nunca esta de mas
// sin importar mis dichos o accion (es)
// te siento aca hasta que me voy

// me sostenes sin tocarme
// me tenes, sin cadenas/esposas
//hace /mucho/tanto no deseo algo
//tanto como agarrar tu cintura tan perfecta//

//soltame, dejame ser
//no quiero seguir cayendo preso en tu gravedad
//aca estoy, tan firme
//sacando pecho estoico, 
//tan firme como deeee bo hacer
//y me descubris, me (re)seducis

//me amaste por ser fragil
//y yo tan fuerte en mi ilusion
//vs
// con tan solo 1 sonrisa     en los oyuelos de tu sonrisa
// y toda mi fuerza , desaparecio                           para hacer temblar mis rodillas 



