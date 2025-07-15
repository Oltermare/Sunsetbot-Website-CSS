// ==UserScript==
// @name         优化sunsetbot网站字体界面过大的问题
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  优化晚霞分析与记录页面的布局宽度和字体大小，使其更舒适。
// @author       Oltermare
// @match        https://sunsetbot.top/*
// @grant        GM_addStyle
// @license     CC BY-NC-SA 4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// ==/UserScript==

(function() {
    'use strict';

    // 使用 GM_addStyle 注入自定义 CSS 样式
    GM_addStyle(`
        /* 调整页面宽度 */
        .container-fluid > .row:not(:has(canvas)) {
            max-width: 1000px !important; /* 设置一个合适的宽度，可以根据需要调整 */
            margin-left: auto !important;
            margin-right: auto !important;
            }

        /* 取消整体的字体放大 */
        * {
            font-size: 1rem;
        }

        /* 调整导航栏标题字体大小 */
        .navbar-text {
            font-size: 1.3rem !important;
        }

        /* 调整导航项字体大小 */
        .navbar-nav,
        .nav_ul li a {
            font-size: 1.1rem !important;
        }

        /* 调整卡片文本字体大小 */
        .card-text {
            font-size: 1rem !important;
        }

        /* 调整选项按钮 */
        .form-select-lg,
        .btn-lg, .btn-group-lg > .btn,
        .form-control-lg {
            font-size: 1rem !important;
        }

        
        /* 翻车了按钮调整 */
        .float-button {
            font-size: 1rem !important;
        }

        /* 调整关键参数显示 */
        .fs-5 {
            font-size: 1rem !important;
            font-weight: bold;
        }

        h2, .h2 {
            font-size: 1.3rem !important;
        }

        h3, .h3 {
            font-size: 1.2rem !important;
        }

        h4, .h4 {
            font-size: 1.2rem !important;
        }

        h5, .h5,
        .fs-3 {
            font-size: 1.2rem !important;
        }


        /* 专业版调整 */

        .nav_ul li {
            width: 4rem;
            margin: 30px 0;
        }

        .nav_ul {
            height: none;
            margin: 0 20px;
            padding: 10px 20px;
        }

        #img_des,
        #windy_des {
            font-size: 1.2rem !important;
        }

        .submit_btn,
        .paragraph {
            font-size: 1rem !important;
        }


    `);

    // 如果页面有延迟加载图片，确保在样式应用后也能正确显示
    // 这里的逻辑与原页面保持一致，确保折叠内容展开时图片加载
    document.addEventListener('DOMContentLoaded', function() {
        const collapseElement = document.getElementById('accuracyDetails');
        if (collapseElement) {
            collapseElement.addEventListener('shown.bs.collapse', function() {
                const lazyImages = this.querySelectorAll('img.lazy-load');
                lazyImages.forEach(img => {
                    if (!img.src && img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
            });
        }
    });

})();
