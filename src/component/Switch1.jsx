import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Switch1 = ({ isActive, id, type }) => {
    const [switc, setswitch] = useState(isActive);
    // console.log(isActive);
    const switch1 = () => {
        if (type == "category") {
            toggle1();
        }
        else {
            toggle2();
        }

    }

    const toggle1 = async (req, res) => {

        let data = JSON.stringify({
            "categoryId": id
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'https://seashell-app-lgwmg.ondigitalocean.app/api/updateStatus',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setswitch(!switc);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const toggle2 = async (req, res) => {
        let data = JSON.stringify({
            "menuId": id
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'https://seashell-app-lgwmg.ondigitalocean.app/api/toggleMenuStatus',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setswitch(!switc);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            {
                !switc ?
                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center cursor-pointer '>
                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                    </div> :
                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center cursor-pointer '>
                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                    </div>
            }
        </div>
    )
}
export default Switch1