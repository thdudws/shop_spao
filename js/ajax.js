//위클리 베스트 상품 json
$.ajax({
    url : "./json/product_b.json",
    dataType : "json",
    success : function(data){
        if(data.length > 0){
            let boxs = $('.img_box_wrap')
            console.log(boxs)

            for(let i=0; i<boxs.length; i++){
                console.log(data[i].img)
                $('.img_box_wrap').eq(i).append(`
                    <div class="img_box">
                        <img src="${data[i].img}" alt="">
                        
                    </div>

                    <div class="cloth_name">
                        <p class="full_name">${data[i].title}</p>
                        <span><img src="img/cloth_wish.png" alt="" style="width: 19px;"></span>
                    </div>

                    <p class="price">${data[i].price} <span class="sale">${data[i].sale}</span> <span class="per">${data[i].percent}</span></p>

                    <div class="chips">
                        <span style="background-color: ${data[i].color1};"></span>
                        <span style="background-color: ${data[i].color2};"></span>
                        <span style="background-color: ${data[i].color3};"></span>
                        <span style="background-color: ${data[i].color4};"></span>
                    </div>

                    <p class="review">리뷰 ${data[i].review}건</p>   
                `)
                let spanClass = (i >= 4 && i <= 8) ? 'num2' : 'num';
                $('.img_box_wrap').eq(i).append(`
                    <span class="${spanClass}">${data[i].num}</span>
                    `);
                
                
                const buttonData = [
                    { key: 'w_btn', class: '' },
                    { key: 'm_btn', class: '' },
                    { key: 'reorder', class: '' },
                    { key: 'uni_btn', class: '' },
                    { key: 'free', class: 'red_btn' },
                    { key: 'coupon', class: 'red_btn' }
                ];

                buttonData.forEach(item => {
                    if (data[i][item.key] !== "") {
                        $('.img_box_wrap').eq(i).append(`
                            <button class="${item.class}">${data[i][item.key]}</button>
                        `);
                    }
                });
                 // if (data[i].num1 !== "") {
                //     $('.img_box_wrap').eq(i).append(`
                //         <span class="num">${data[i].num1}</span>
                //     `);
                // }
                // if (data[i].num2 !== "") {
                //     $('.img_box_wrap').eq(i).append(`
                //        <span class="num2">${data[i].num2}</span>
                //     `);
                // }
                // if (data[i].reorder !== "") {
                //     $('.img_box_wrap').eq(i).append(`
                //         <button>${data[i].reorder}</button>
                //     `);
                // }
                // if (data[i].uni_btn !== "") {
                //     $('.img_box_wrap').eq(i).append(`
                //         <button>${data[i].uni_btn}</button>
                //     `);
                // }
                // if (data[i].free !== "") {
                //     $('.img_box_wrap').eq(i).append(`
                //         <button class="red_btn">${data[i].free}</button>
                //     `);
                // }
                // if (data[i].coupon !== "") {
                //     $('.img_box_wrap').eq(i).append(`
                //         <button class="red_btn">${data[i].coupon}</button>
                //     `);
                // }
            }
        }
        
    }
});

//신상품 슬라이드 json
$.ajax({
    url: "./json/product_n.json",
    dataType: "json",
    success: function (data_n) {
        if(data_n.length > 0){
            let boxs_n = $('.slide2')
            console.log(boxs_n)

            for(let i=0; i<boxs_n.length; i++){
                console.log(data_n[i].img)
                $('.slide2').eq(i).append(`
                    <div class="img_box">
                        <img src="${data_n[i].img}" alt="">
                    </div>

                    <div class="cloth_name">
                        <p class="full_name">${data_n[i].title}</p>
                        <span><img src="img/cloth_wish.png" alt="" style="width: 19px;"></span>
                    </div>

                    <p class="price">${data_n[i].price} <span class="sale">${data_n[i].sale}</span> <span class="per">${data_n[i].percent}</span></p>

                    <div class="chips">
                        <span style="background-color: ${data_n[i].color1};"></span>
                        <span style="background-color: ${data_n[i].color2};"></span>
                        <span style="background-color: ${data_n[i].color3};"></span>
                        <span style="background-color: ${data_n[i].color4};"></span>
                    </div>

                    <p class="review">리뷰 ${data_n[i].review}건</p>
                `)
                const buttonData2 = [
                    { key: 'w_btn', class: '' },
                    { key: 'm_btn', class: '' },
                    { key: 'reorder', class: '' },
                    { key: 'uni_btn', class: '' },
                    { key: 'free', class: 'red_btn' },
                    { key: 'coupon', class: 'red_btn' }
                ];

                buttonData2.forEach(item => {
                    if (data_n[i][item.key] !== "") {
                        $('.slide2').eq(i).append(`
                            <button class="${item.class}">${data_n[i][item.key]}</button>
                        `);
                    }
                });
            }
        }   
    }
});