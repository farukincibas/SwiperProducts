import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
import products from './data';
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },


    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        backgroundColor: "#e9e9e9",
        marginLeft: "70px",
    },
    card: {
        maxWidth: 200,
        margin: "auto",
        textAlign: "center",
        fontFamily: "arial",
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
        backgroundColor: "#e9e9e9",


    },
    title: {

        paddingBottom: '10px',
        height: 30,
    },
    detail: {
        backgroundColor: "#e9e9e9",
        paddingBottom: '10px',
        height: 30,
    },
    price: {
        color: "grey",
        fontsize: 22,
        height: 30,
        textDecorationLine: 'line-through',
    },
    redBox: {
        float: "left",
        // border: "1px solid red",
        backgroundColor: "red",
        height: 20,
    },
    Heart: {
        float: "left",
        height: 20,
        marginTop: "-175px",

    },
    giveSpace: {
        paddingBottom: '20px',

    },

}));




function SwipeProducts() {

    const classes = useStyles();
    let discountPrice;
    let divided;
    let result;
    const thumbs = [];
    for (let i = 0; i < 15; i += 1) {
        thumbs.push(

            <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>

                <div className={classes.card}>
                    <div className={classes.giveSpace}></div>



                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                    >


                        <Grid item xs={12}>

                            <div className={classes.redBox}>

                                <span style={{ color: "white" }}>
                                    {(() => {
                                        if (products[i].price < products[i].oldPrice) {
                                            discountPrice = products[i].oldPrice - products[i].price;
                                            divided = products[i].oldPrice / 100;
                                            result = discountPrice / divided;
                                            return Math.round(result) + '%';
                                        }
                                        else {

                                            return "";
                                        }
                                    })()}
                                </span>
                            </div>

                            <div>
                                <img
                                    className={classes.img}
                                    alt="complex"
                                    src={products[i].imageS}
                                />
                            </div>

                        </Grid>
                        <Grid item xs={3}>
                            {(() => {
                                if (products[i].params.likeCount === "") {

                                    return "";
                                }
                                else {

                                    return (
                                        <div className={classes.Heart}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                                                {products[i].params.likeCount}
                                            </div>

                                        </div>
                                    );
                                }
                            })()}
                        </Grid>


                    </Grid>




                    <h4 className={classes.title}>{products[i].name}</h4>

                    <p className={classes.detail} ><small >
                        {(() => {
                            switch (products[i].params.land) {
                                case "": return "";
                                default: return products[i].params.land + ' |';
                            }
                        })()}  &nbsp;
                        {(() => {
                            switch (products[i].params.region) {
                                case "": return "";
                                default: return products[i].params.region + ' |';
                            }
                        })()}  &nbsp;
                            {(() => {
                            switch (products[i].params.art) {
                                case "": return "";
                                default: return products[i].params.art;
                            }
                        })()}  &nbsp;
                        {products[i].params.rebsorte}
                    </small></p>

                    <strong><span >{products[i].priceText}*</span></strong> &nbsp; <span className={classes.price}>{products[i].oldPriceText}</span>

                    <p> <small>{products[i].params.basePrice}</small></p>

                </div>

            </SwiperSlide>
        );
    }

    return (

        <React.Fragment>



            <Swiper
                id="thumbs"
                spaceBetween={50}
                slidesPerView={5}
                navigation

            >
                {thumbs}
            </Swiper>


        </React.Fragment>
    );
}

export default SwipeProducts;
