import axios from "axios";


const axiosInstance = axios.create({
 baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

axiosInstance.interceptors.request.use(
    (config) =>{
        //요청을 보내기 전에 수행할 작업
        const user = JSON.parse(localStorage.getItem('user'));
        if(user&&user.token) {
                  // Authorization 헤더에 토큰 추가
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config; //수정된 설정 변환
    },
    (error) =>{
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error)
    }
);

export default axiosInstance;