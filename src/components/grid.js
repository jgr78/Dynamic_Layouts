import React from 'react';
import Context from '../store/context';
import { Schema, SchemaDefault } from '../config/properties';
import Item from './item'

export default () => (
    <section id="grid_container">
        <Context.Consumer>
            {context => (
                context.state.data.map((el, index) => (
                    
                    <div key={index} className={`grid_item col${(Schema[context.state.device].length > index) ? Schema[context.state.device][index] : SchemaDefault}`}
                    onClick={()=>context.state.clickHandler(index + 1)}>
                        <Item {...el} />
                    </div>
                ))
            )}
        </Context.Consumer>
        <style>{`
            #grid_container {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                flex-grow: 1;
                flex-shrink: 1;
                justify-content: space-between; 
            }
            .grid_item {
                cursor: pointer;
            }
            .col12 {
                width: 100%
            }
            .col8 {
                width: 66%
            }
            .col6 {
                width: 49.5%
            }
            .col4 {
                width: 33%
            }
            .col3 {
                width: 24.75%
            }
            .col2 {
                width: 16.3%
            }
            .grid_item_image {
                max-width: 100%;
                height: auto;
                border-radius: 200px;
            }
            .grid_item_title {
                font-weight: bold;
                font-size: 1em;
                margin-top: 10px;
            }
            .grid_item_content {
                font-size: 0.8em;
                margin: 10px 0 40px 0;
                padding-right: 10px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        `}</style>
    </section>
)



