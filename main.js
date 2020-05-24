document.getElementById("root").append(
    FueJS.createElement("div", {

            //***************************Right Side*************************

            className: 'rightSide'
        },
        FueJS.createElement("div", {

                //--------Content Right Side------------

                className: 'contentRight'
            },
            [FueJS.createElement("h2", {
                    className: 'h2'
                }, 'ورود'), FueJS.createElement("h1", {
                    className: 'h1'
                }, 'ورود به حساب کاربری'),
                FueJS.createElement("p", {
                    className: 'titleInput'
                }, 'جهت ورود به حساب کاربری رمز عبور خود را وارد نمایید'),

                //-----Form Login-----

                FueJS.createElement("form", {
                    id: 'loginForm',
                    onsubmit: event => {
                        event.preventDefault();
                        const data = FueJS.getFormData(event.target);
                    }

                }, [FueJS.createElement("div", {
                    className: 'emailInput'
                    //Email Input
                }, [FueJS.createElement("input", {
                    id: 'inputEmail',
                    className: 'email',
                    name: 'email',
                    placeholder: 'نام کاربری',
                    type: 'text'
                }), FueJS.createElement("i", {
                    className: 'fas fa-user fa-xs'
                })]), FueJS.createElement("div", {
                    className: 'passInput'
                    //Password iInput
                }, [FueJS.createElement("input", {
                    id: 'password',
                    className: 'pass',
                    name: 'password',
                    placeholder: 'رمز عبور',
                    type: 'text'
                }), FueJS.createElement("i", {
                    className: 'fas fa-lock fa-xs'
                })]), FueJS.createElement("div", {
                    className: 'securInput'
                }, [FueJS.createElement("div", {
                    className: 'secur'
                    //Security Sode Input
                }, [FueJS.createElement("input", {
                    id: 'securCode',
                    className: 'securCode',
                    name: 'securCode',
                    type: 'text',
                    placeholder: 'کد امنیتی'
                }), FueJS.createElement("i", {
                    className: 'fa fa-th fa-xs'
                })]), FueJS.createElement("div", {
                    className: 'code'
                }, [FueJS.createElement("img", {
                    src: './images/secur code chapch.jpg',
                    alt: 'chapch piture'
                }), FueJS.createElement("i", {
                    className: 'fas fa-sync-alt fa-xs',
                    
                    //submit Button 
                })])]), FueJS.createElement("button", {
                    type: 'submit',
                    id: 'submitButton'
                }, 'ورود'), FueJS.createElement("div", {
                    className: 'check'
                }, [FueJS.createElement("input", {
                    className: 'checkBox',
                    type: 'checkbox'
                }), FueJS.createElement("p", {

                }, 'مرا به خاطر بسپار')])])

            ]))
)

document.getElementById("root").append(
    FueJS.createElement("div" , {
        className : 'gap'
    })
)

document.getElementById("root").append(

    //***********************Left Side**************************

    FueJS.createElement("div", {
        className: 'leftSide'
    }, 

        //----------Logo Of AntiVirus------------    

    [FueJS.createElement("img", {
        className: 'spinRadar',
        src: './images/radar-angle.png'
    }), FueJS.createElement("div", {
        className: 'radarPart'
    }, [FueJS.createElement("img", {
        className: 'logo',
        src: './images/logo.png',
        alt: 'Logo of Anti-Virus'
    }), FueJS.createElement("span", {
        className: 'spinRadar'
    }), FueJS.createElement("span", {
        className: 'palseWave',
    }), FueJS.createElement("span", {
        className: 'palseWave'
    }), FueJS.createElement("span", {
        className: 'palseWave'
    }), FueJS.createElement("span", {
        className: 'palseWave'
    }), FueJS.createElement("span", {
        className: 'palseWave'
    }), FueJS.createElement("span", {
        className: 'palseWave'
    }), FueJS.createElement("span", {
        className: 'palseWave'
    })]), FueJS.createElement("h3", {

    }, 'Multi Anti-Virus & Cybersecurity')])
)