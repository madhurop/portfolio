import React from 'react'
import { Fade } from 'react-awesome-reveal'

function About() {
    return (
        
        <div className="w-full min-h-full flex flex-row justify-center text-white">
            <Fade className="w-full h-full flex flex-col sm:flex-row">
            <div className="min-w-6/12 h- full  flex items-center  ">
                <img className="p-5" src="https://lh3.googleusercontent.com/pw/AP1GczP7GZm3C-K7LoG5NnIkgN9_sQBuGail4tUa06YtC4vD-CuYBokrBuC5rXLqzIAHvocD8p8yKiorrke-vBOcn5fjlbM9jICPwGpIFQnt82wuVbb9VNQv8XQjimd-QqzpDgUrStQdlXrh4wsZmyQRQYQH_zg9u9lml3rnwZRVMfrRUKkCe0iaXXc9hdw-izDkJMYG_2663kKwMIxnqoE8CjCqvLCiLd6J3LDIH_vYCGO51VO4Rk3rEuDsjGwxLx33NFhcK6adz4Kya_nBgl0ECkZlqaSRROgTQFOrquRoj61j62sq3MuO7i2OKaROQp57Yje6FSHr7reX8BFSd1Gpd4JNafd8PCoCu4ALXYm2bSiiItlU3b-sz-nl7YPNJ_Vj8f6g1nV8vb9WlfXs8jTy-rjToT4Io2LSkIWI1Kl7D-c0nljaQIvArmB7jfM00pD6Y3UhecGqoqF1Js4NJGuE6g_KdnxsZLox5KUwmDyFcw4wAUrEz1XBvZPQES0Ybdr7E5rSj9vudnzFESUGON_Pv2Dae2kQWq40MlGiWFtss-5IT_VgkcFEuSvPvYGm2hUKotRpsvXizF9jy55Rna1e4aQkRLyQ8-hT8UnrnkJweCwh-pefxV2uLWVWig8N40UIBpKoZ67bkXnIfI4Shss2NU2Ro-vdRCrctMHjiRGO0HlLnHryqfcTtQ7bF7RyLUkZRdHL2OwrOoX1ffrN-dteL0ILPEPDE66V-mXr2ye6ZGMzFNDUC9HOQsNbPf3L_vzFYuYae4gd1W6PNDxgSMACoDSnJJQCxMdj8IPXROHFAGREKb9U7oNBcxdeDmsONEOBNwpnCT0Bq82ZFr_wmnw9OGBMtsWI-7JYizmVpt5xRWJsaaWHiWlHNpYMGwOTHOSjZQYURoIvyrYjCNHyBK38N3dx=w641-h641-s-no-gm?authuser=0" alt="" />
            </div>
            <div className="min-w-6/12 h-auto  flex flex-col justify-center gap-y-8">
                <h1 className="text-5xl font-bold ml-4 text-orange-400 ">About Me</h1>
                <p className="text-gray-400 ml-4 text-wrap">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className="w-full h-auto">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">Name:</td>
                                    <td className="px-4 py-2 text-gray-400">Madhur Borade</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">Date of birth:</td>
                                    <td className="px-4 py-2 text-gray-400">November 28, 2002</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">Email:</td>
                                    <td className="px-4 py-2 text-gray-400">madhurborade654@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">LinkedIn</td>
                                    <td className="px-4 py-2 text-gray-400"><a href="https://www.linkedin.com/in/madhurborade/">https://www.linkedin.com/in/madhurborade/</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">Github</td>
                                    <td className="px-4 py-2 text-gray-400"><a href="https://github.com/madhurop">https://github.com/madhurop</a></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </Fade>

        </div>
    )
}

export default About
