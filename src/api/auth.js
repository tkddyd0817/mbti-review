import axiosInstance from "./axiosInstance"



export const register = async (userData) =>{
    const res = await axiosInstance.post('/register',userData);
    return res.data;
};


export const login = async(userData) =>{
    const res = await axiosInstance.post('/login',userData);
    return res.data;
};


export const getUserProfile = async() =>{
    const res = await axiosInstance.get('/user');
    return res.data;
};


export const updateProfile = async(profileData) =>{
    const formData = new FormData();
    if(profileData.nickname) {
        formData.append('nickname',profileData.nickname);
    }
    if(profileData.avatar) {
        formData.addend('avatar',profileData.avatar);
    }

const res = await axiosInstance.patch('profile',formData,{
    headers:{'Content-Type': 'multipart/form-data',},
});
return res.data;


}