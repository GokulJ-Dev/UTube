import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png" alt="logo" />
                <h3>Swiggy</h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({ restaurantDetails }) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantDetails.cloudinaryImageId} />
            <h3>{restaurantDetails.name}</h3>
            <h5>{restaurantDetails.cuisines?.join(', ')}</h5>
            <h5>{restaurantDetails.sla.deliveryTime} mins</h5>
        </div>
    )
}

const restPerundurai = [
    {
        "info": {
            "id": "672903",
            "name": "Meat and Eat",
            "cloudinaryImageId": "37775660fa8fad36a34f0c9e6c69a8cc",
            "locality": "New dsp office",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Fast Food",
                "Burgers",
                "Biryani",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 3.5,
            "feeDetails": {
                "restaurantId": "672903",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "632",
            "avgRatingString": "3.5",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 19:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=672903",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "689384",
            "name": "Paradise Family Restaurant (Halal)",
            "cloudinaryImageId": "6273c10c1a21352a24debe20280a115b",
            "locality": "Sunday market",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "689384",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "410017",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 22:30:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=689384",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "176637",
            "name": "Hotel Royal Chettinad",
            "cloudinaryImageId": "hwu5iogpipjvaiyeuw5i",
            "locality": "Erode Mani Road",
            "areaName": "Perundurai",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian",
                "Biryani",
                "Chettinad",
                "Chinese",
                "Seafood",
                "Tandoor",
                "Grill"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "176637",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "101608",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 22:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=176637",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "653284",
            "name": "Grill Nights",
            "cloudinaryImageId": "a2686dcf870a1cdfc5ec49f0f5304e33",
            "locality": "Kumaran Nagar",
            "areaName": "Vadamugam Vellode",
            "costForTwo": "₹160 for two",
            "cuisines": [
                "Lebanese",
                "Chinese",
                "Biryani"
            ],
            "feeDetails": {
                "restaurantId": "653284",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "90710",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 20:15:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=653284",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "544483",
            "name": "Mr Burger",
            "cloudinaryImageId": "lg9peoktxrqkvexssr9v",
            "locality": "Perundurai Rd",
            "areaName": "Perundurai",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "American",
                "Snacks"
            ],
            "feeDetails": {
                "restaurantId": "544483",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "10891",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 18:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=544483",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "176640",
            "name": "Kokkarakko Briyani And Fast Food",
            "cloudinaryImageId": "i6o22wil1p4hesdo40gj",
            "locality": "Railway Station Road",
            "areaName": "Perundurai",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Indian"
            ],
            "avgRating": 3.2,
            "feeDetails": {
                "restaurantId": "176640",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "119723",
            "avgRatingString": "3.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 18:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=176640",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "176634",
            "name": "Pizz Burg",
            "cloudinaryImageId": "wdt4eqxcffpqg3gqqmjr",
            "locality": "Vellode Road",
            "areaName": "Perundurai",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Pizzas",
                "Burmese"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "176634",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "158218",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 20:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=176634",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "412831",
            "name": "Eeebees Bakery",
            "cloudinaryImageId": "wj8auah2rnpkpq6nmv8w",
            "locality": "Perundurai",
            "areaName": "Perundurai",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Bakery",
                "Sweets"
            ],
            "feeDetails": {
                "restaurantId": "412831",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "315519",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 17:30:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=412831",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "666692",
            "name": "Family Time",
            "cloudinaryImageId": "8edd669767a7e6b731c56d8d8fa7c3db",
            "locality": "GVDL Nagar",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Seafood",
                "Biryani",
                "Fast Food"
            ],
            "feeDetails": {
                "restaurantId": "666692",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "399883",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 23:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=666692",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "470684",
            "name": "Masala Darbar Briyani Fast Food",
            "cloudinaryImageId": "zxbhwao7sjeckgakgwkp",
            "locality": "Perundhurai - Bhavani Road",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Biryani",
                "Indian",
                "Chinese"
            ],
            "avgRating": 3.5,
            "feeDetails": {
                "restaurantId": "470684",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "282688",
            "avgRatingString": "3.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 18:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=470684",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "540482",
            "name": "Yummeys Restaurant",
            "cloudinaryImageId": "gaj3pujc23gjjaf9hcto",
            "locality": "Kongu Engineering College Road",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "540482",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "325106",
            "avgRatingString": "3.7",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 18:30:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=540482",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "531263",
            "name": "Grillland Barbecue",
            "cloudinaryImageId": "nmuqp6fr0gnvj1tchgyw",
            "locality": "Agraharam Street",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Barbecue",
                "Snacks",
                "Lebanese",
                "Beverages",
                "South Indian",
                "North Indian"
            ],
            "feeDetails": {
                "restaurantId": "531263",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "322107",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 17:30:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=531263",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "241654",
            "name": "New Melting Moments",
            "cloudinaryImageId": "yfgbkspw5cnb9yclgwsp",
            "locality": "Erode Mani Road",
            "areaName": "Perundurai",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 3.7,
            "veg": true,
            "feeDetails": {
                "restaurantId": "241654",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "147282",
            "avgRatingString": "3.7",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 19:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=241654",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "691895",
            "name": "Amul Ice Cream and Pizza Point",
            "cloudinaryImageId": "4a19827309b5070bf8fe60bdfdf13f22",
            "locality": "R.S.Road",
            "areaName": "Perundurai",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Fast Food",
                "Snacks",
                "Beverages",
                "Desserts"
            ],
            "feeDetails": {
                "restaurantId": "691895",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "414564",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 17:30:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=691895",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "594510",
            "name": "Zwarma The Shawarma Makers(Tasty Treats)",
            "cloudinaryImageId": "d5efi9dms9h8sy1lxr3x",
            "locality": "Railway Station Road",
            "areaName": "Perundurai",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Arabian",
                "Grill"
            ],
            "avgRating": 3.4,
            "feeDetails": {
                "restaurantId": "594510",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "355637",
            "avgRatingString": "3.4",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 21:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=594510",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "686129",
            "name": "SHRI SHASTI VELAN UNAVAGAM",
            "cloudinaryImageId": "ca24677cec294c447db7ed3ddd40c124",
            "locality": "Kunnathur Road",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Snacks"
            ],
            "feeDetails": {
                "restaurantId": "686129",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "409017",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 18:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=686129",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "601709",
            "name": "Tirupur Sree Annapoorna",
            "cloudinaryImageId": "bctnnlrud36ugxms7ioo",
            "locality": "Salem - Kochi Highway",
            "areaName": "Perundurai",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian",
                "Ice Cream",
                "Biryani"
            ],
            "avgRating": 3.2,
            "feeDetails": {
                "restaurantId": "601709",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "291053",
            "avgRatingString": "3.2",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 22:30:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=601709",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "695678",
            "name": "Vintage Garden Restaurant",
            "cloudinaryImageId": "4cd663111b6a009308e980066bc96bc9",
            "locality": "Erode Road",
            "areaName": "VAIKALMEDU,Perundurai,",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "North Indian"
            ],
            "feeDetails": {
                "restaurantId": "695678",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "416273",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 23:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=695678",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "596320",
            "name": "Ambur Star Biryani",
            "cloudinaryImageId": "ll0epxmrymfcjuheiqzr",
            "areaName": "Perundurai",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Tandoor",
                "Biryani"
            ],
            "feeDetails": {
                "restaurantId": "596320",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 900
            },
            "parentId": "43",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-04-18 22:00:00",
                "opened": true,
                "restaurantClosedMeta": {}
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=596320",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
]

const Body = () => {
    return (
        <div className="body-container">
            {restPerundurai.map(res => <RestaurantCard restaurantDetails={res.info} key={res?.info?.id} />)}
            {/*Component Composition*/}
        </div>
    )
}


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



