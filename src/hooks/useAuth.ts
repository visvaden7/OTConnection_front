// 컨텍스트를 사용하는 커스텀 훅
import {useContext} from "react";
import AuthContext from "../context/AuthContext.tsx";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};