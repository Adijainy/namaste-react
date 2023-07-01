import React from "react";
import ReactDOM from "react-dom/client";
/*
-Header
    -Logo
    -Nav items(rhs)
    -Cart
-Body
    -Search bar
    -RestrauntList
        -RestrauntCard
            -Image
            -Name
            -Rating
            -Cusines
-Footer
    -Links
    -Copyright
*/

const restrauntList =[
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "576559",
            "name": "Third Wave Coffee",
            "uuid": "bba7640f-6b0c-493b-a260-3a05986a07ee",
            "city": "6",
            "area": "Karve Nagar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
            "cuisines": [
              "Beverages",
              "Fast Food",
              "Snacks"
            ],
            "tags": [
              
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "slaString": "37 MINS",
            "lastMileTravel": 4.800000190734863,
            "slugs": {
              "restaurant": "third-wave-coffee-kothrud-kothrud",
              "city": "pune"
            },
            "cityState": "6",
            "address": "SHOWROOM NO 1, GR FLOOR (MEZZANINE + BASEMENT) ,CASABLANCA APARTMENTS CONDOMINIUM, SY NO 16, NEAR KARISHMA COMPLEX ROAD, KOTHRUD, PUNE, Pune, Maharashtra-411029",
            "locality": "Late GA Kulkarni Path",
            "parentId": 274773,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 4200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 4200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "4200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7304645~p=1~eid=00000189-11a1-5cdf-2515-df3d00c8017f~srvts=1688217935071",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "4.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "576559",
              "deliveryTime": 37,
              "minDeliveryTime": 37,
              "maxDeliveryTime": 37,
              "lastMileTravel": 4.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "25486",
            "name": "MH 12 Pav Bhaji",
            "uuid": "bd5c545b-4088-4cdc-90d6-12ae59e3b84c",
            "city": "6",
            "area": "Rasta Peth",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cgf7qsoqsvfwletamxt4",
            "cuisines": [
              "Snacks",
              "Pizzas",
              "Beverages",
              "Street Food"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
              "restaurant": "mh-12-pav-bhaji-rasta-peth-swargate",
              "city": "pune"
            },
            "cityState": "6",
            "address": "326, Near Laxmi Sugandhalay, Rasta Peth, Pune",
            "locality": "",
            "parentId": 8970,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3000,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3000,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3000",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "25486",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 1.2000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "25396",
            "name": "Oven Story Pizza",
            "uuid": "e80fa0ae-d702-4ac7-adc4-76590e2409ab",
            "city": "6",
            "area": "Narayan Peth",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 34,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 39,
            "slaString": "29-39 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
              "restaurant": "ovenstory-pizza-model-colony-swargate",
              "city": "pune"
            },
            "cityState": "6",
            "address": "S.no 457, Near V S Waikar & Sons Jewellers, Shaniwar Peth ,Pune 411030",
            "locality": "Shaniwar Peth",
            "parentId": 3534,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "25396",
              "deliveryTime": 34,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 39,
              "lastMileTravel": 0.4000000059604645,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "394784",
            "name": "Theobroma",
            "uuid": "90436c1e-0284-4602-883e-41fba8a059e9",
            "city": "6",
            "area": "Shivajinagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "asd7v64r8hjmbx5nivyh",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 2.299999952316284,
            "slugs": {
              "restaurant": "theobroma-shivaji-nagar-shivaji-nagar",
              "city": "pune"
            },
            "cityState": "6",
            "address": "H NO. 573/2, SHIVAJI NAGAR, PUNE, Karve Road, Pune PMC, Maharashtra, 411004",
            "locality": "Karve Road",
            "parentId": 1040,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7262236~p=13~eid=00000189-11a1-5cdf-2515-df4100c80d67~srvts=1688217935071",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "394784",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 2.299999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.5",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "18808",
            "name": "Faasos - Wraps & Rolls",
            "uuid": "e4e6312a-96fd-4e7c-b924-e109cf7df89a",
            "city": "6",
            "area": "Shaniwar Peth",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "North Indian",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
              "restaurant": "fassos-subhamangal-housing-society-shivaji-nagar",
              "city": "pune"
            },
            "cityState": "6",
            "address": "S.no 457 shaniwar peth ,Pune 411030",
            "locality": "Shaniwar Peth FC",
            "parentId": 21809,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "18808",
              "deliveryTime": 26,
              "minDeliveryTime": 26,
              "maxDeliveryTime": 26,
              "lastMileTravel": 0.4000000059604645,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "491702",
            "name": "Naadbramha Idli",
            "uuid": "cb7035f8-ee39-4707-8e8a-1ac65c32af1d",
            "city": "6",
            "area": "Swargate",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "ydrbvdsobyfzyapbkdmj",
            "cuisines": [
              "South Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0.30000001192092896,
            "slugs": {
              "restaurant": "naadbramha-idli-swargate-swargate",
              "city": "pune"
            },
            "cityState": "6",
            "address": "Shop No.3 ,Ground floor H.No.184 A/MP 2, Shivaji road,Kasba peth,pune-411011",
            "locality": "Rasta Peth",
            "parentId": 251339,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3000,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3000,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3000",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "491702",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0.30000001192092896,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.6",
            "totalRatings": 50,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "62934",
            "name": "LunchBox - Meals and Thalis",
            "uuid": "adc8ae31-eff6-406f-b5ab-541eb74f4e3d",
            "city": "6",
            "area": "Narayan Peth",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
              "restaurant": "lunchbox-shaniwar-peth-swargate",
              "city": "pune"
            },
            "cityState": "6",
            "address": "S.no 457 shaniwar peth ,Pune 411030",
            "locality": "Shaniwar Peth",
            "parentId": 4925,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "62934",
              "deliveryTime": 31,
              "minDeliveryTime": 31,
              "maxDeliveryTime": 31,
              "lastMileTravel": 0.4000000059604645,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
          },
          "subtype": "basic"
        },
]



const Title = ()=>{
    return (
        <a href="/">
            <img className="logo" src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png" alt="logo" />
        </a>
    );
};

const Header = ()=> (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><i className="fa-solid fa-cart-arrow-down"></i> Cart</li>
            </ul>
        </div>
    </div>  
);

const Body = () =>(
    <div className="restaurant-list">
        {restrauntList.map((restaurant) => {
            return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
        }
        )}
    </div>
);

const Footer = () =>(
    <h4>Footer</h4>
);

const RestrauntCard =({name, cloudinaryImageId, cuisines, lastMileTravelString}) =>(
    <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
    </div>
);

//navbar component
const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);