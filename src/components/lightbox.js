import React from 'react';
import Context from '../store/context';
import Item from './item'

export default () => (
    <>
        <Context.Consumer>
            {context => (
                <section id="lightbox" className={context.state.selected ? '' : 'hidden'}>
                    <div id="lightbox_container">
                        <div className="close" onClick={()=>context.state.clickHandler(0)}></div>
                        <div className="lightbox_item">
                            <Item {...context.state.data[context.state.selected - 1]}  />
                        </div>
                    </div>
                </section>
            )}
        </Context.Consumer>
        <style>{`
            .hidden {
                display: none;
            }
            #lightbox {
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%; 
                height: 100%;
                background: rgba(100, 100, 100, 0.9); ;
                z-index: 1;
            }            
            .lightbox_item{
                max-width: 60%;
                margin: 0 auto;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .lightbox_item .grid_item_content {
                overflow: hidden;
                display: block;
                -webkit-line-clamp: unset;
                -webkit-box-orient: unset;
            }
            .close {
                position: absolute;
                right: 22px;
                top: 22px;
                width: 32px;
                height: 32px;
                opacity: 0.8;
                cursor: pointer;
            }
            .close:hover {
                opacity: 1;
            }
            .close:before, .close:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 33px;
                width: 4px;
                background-color: #333;
            }
            .close:before {
                transform: rotate(45deg);
            }
            .close:after {
                transform: rotate(-45deg);
            }
        `}</style>
    </>

)



