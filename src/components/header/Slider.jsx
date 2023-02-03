import React from 'react'
import './Slider.css'

const Slider = () => {
    return (
        <>
            <section id="News" class="slider_01">
                 <div class="rev_slider_wrapper">
                     <div id="rev_slider_1" class="rev_slider fullwidthabanner"> {/*style="display:none;" data-version="5.4.1"> */}
                        <ul>
                            
                        
                            <li>
                                <div class="ImageSection">
                                {/* <img src="6.png" alt="App Store" ></img> */}
                                </div>
                                <div class="TextArea">
                                    <h2><strong>Portfolio 2.0</strong></h2>
                                    
                                    Some text here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Etiam arcu erat, faucibus ut odio a, pellentesque euismod velit. 
                                </div>
                            </li>
                             {/* <li data-index="rs-3046" data-transition="fadetotopfadefrombottom" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb=""  data-rotate="0"  data-saveperformance="off"  data-title="" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <div class="tp-caption rs-parallaxlevel-1"
                                    data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                                {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="left"
                                    data-y="middle"
                                    data-hoffset="0"
                                    data-voffset="['-33','-33','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']">

                                    <img src="src/components/images/slider/shape_1.png" alt="App Store" width="359" height="187"></img>

                                </div>
                                <div class="tp-caption sl1_subtitle ws_nowrap"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['-69','-69','-69','-69']" 

                                        data-fontsize="['12','12','12','12']"
                                        data-fontweight="400"
                                        data-lineheight="['26','26','26','26']"
                                        data-width="['500','500','100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#959595']"

                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'


                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]">

                                </div>
                                <div class="tp-caption ws_nowrap"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['-3', '-3', '0', '0']" 

                                        data-y="['middle']" 
                                        data-voffset="['0','0','0','0']" 

                                        data-fontsize="['48','48','48','28']"
                                        data-fontweight="600"
                                        data-lineheight="['58', '58', '58', '38']"
                                        data-width="['500','540','100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#333333']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"power2.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]">
                                        New Portfolio is here!
                                </div>
                                <div class="tp-caption ws_nowrap wb_all hide_br padding_mobile"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['116','116','116','116']" 

                                        data-fontsize="['14','14','14','14']"
                                        data-fontweight="['400', '400', '400', '400']"
                                        data-lineheight="['26']"
                                        data-width="['570','400','100%','100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#959595']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                        {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,30]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,30]"

                                        >
                                        <h6> We're glad to announce that we can finally deploy 
                                        the first version of Juan Mota's Portfolio. Now you 
                                        can search through the app and learn about him and 
                                        his achievements.</h6>
                                </div>
                                <div class="tp-caption tp-resizeme"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['205','205','205','205']" 

                                        data-fontsize="['16','16','16','16']"
                                        data-fontweight="600"
                                        data-lineheight="['16']"
                                        data-width="['100', '100', '100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#01d85f']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                        {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]">
                                </div>
                                <div class="tp-caption d-md-none d-sm-none d-xs-none d-lg-block"
                                    data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                                {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="right"
                                    data-y="top"
                                    data-hoffset="['-44','-44','0','0']"
                                    data-voffset="['90','90','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    
                                    data-visibility="['on', 'on', 'off', 'off']">

                                    <img src="src/components/images/slider/shape_2.png" alt="App Store"></img>
                                </div>
                                <div class="tp-caption rs-parallaxlevel-1 d-md-none d-sm-none d-xs-none d-lg-block"
                                    data-frames='[{"delay":0,"speed":300,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                            {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="right"
                                    data-y="bottom"
                                    data-hoffset="['87','87','0','0']"
                                    data-voffset="['-146','-146','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    
                                    data-visibility="['on', 'on', 'off', 'off']">
                                        
                                    <img src="src/components/images/slider/6.png" alt="App Store" width="398" height="694"></img>
                                </div>
                            </li>
                             <li data-index="rs-3047" data-transition="fadetotopfadefrombottom" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb=""  data-rotate="0"  data-saveperformance="off"  data-title="" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <div class="tp-caption rs-parallaxlevel-1"
                                    data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                                {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="left"
                                    data-y="middle"
                                    data-hoffset="0"
                                    data-voffset="['-33','-33','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"

                                ><img src="src/components/images/slider/shape_1.png" alt="App Store" width="359" height="187"></img></div>
                                <div class="tp-caption sl1_subtitle ws_nowrap"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['-69','-69','-69','-69']" 

                                        data-fontsize="['12','12','12','12']"
                                        data-fontweight="400"
                                        data-lineheight="['26','26','26','26']"
                                        data-width="['500','500','100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#959595']"

                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'


                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]"

                                        ></div>
                                <div class="tp-caption ws_nowrap"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['-3', '-3', '0', '0']" 

                                        data-y="['middle']" 
                                        data-voffset="['0','0','0','0']" 

                                        data-fontsize="['48','48','48','28']"
                                        data-fontweight="600"
                                        data-lineheight="['58', '58', '58', '38']"
                                        data-width="['500','540','100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#333333']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"power2.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]"

                                        >Shoot me a Message!
                                </div>
                                <div class="tp-caption ws_nowrap wb_all hide_br padding_mobile"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['116','116','116','116']" 

                                        data-fontsize="['14','14','14','14']"
                                        data-fontweight="['400', '400', '400', '400']"
                                        data-lineheight="['26']"
                                        data-width="['570','400','100%','100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#959595']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                        {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,30]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,30]"

                                        >
                                        <h5>The "Contact Me" feature is now available, 
                                        all you need to do is type your email and 
                                        it will take you to a page to type the 
                                        content of an that will be sent to me directly.
                                        Let's chat!</h5>
                                </div>
                                <div class="tp-caption tp-resizeme"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['205','205','205','205']" 

                                        data-fontsize="['16','16','16','16']"
                                        data-fontweight="600"
                                        data-lineheight="['16']"
                                        data-width="['100', '100', '100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#01d85f']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                        {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]"

                                        >
                                </div>
                                <div class="tp-caption d-md-none d-sm-none d-xs-none d-lg-block"
                                    data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                                {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="right"
                                    data-y="top"
                                    data-hoffset="['-44','-44','0','0']"
                                    data-voffset="['90','90','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    
                                    data-visibility="['on', 'on', 'off', 'off']">

                                    <img src="src/components/images/slider/shape_2.png" alt="App Store"></img>
                                </div>
                                <div class="tp-caption rs-parallaxlevel-1 d-md-none d-sm-none d-xs-none d-lg-block"
                                    data-frames='[{"delay":0,"speed":300,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                            {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="right"
                                    data-y="bottom"
                                    data-hoffset="['87','87','0','0']"
                                    data-voffset="['-146','-146','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    
                                    data-visibility="['on', 'on', 'off', 'off']">

                                    <img src="src/components/images/slider/6.png" alt="App Store" width="398" height="694"></img>
                                </div>
                            </li>

                            <li data-index="rs-3048" data-transition="fadetotopfadefrombottom" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb=""  data-rotate="0"  data-saveperformance="off"  data-title="" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <div class="tp-caption rs-parallaxlevel-1"
                                    data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                                {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="left"
                                    data-y="middle"
                                    data-hoffset="0"
                                    data-voffset="['-33','-33','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']">

                                    <img src="src/components/images/slider/shape_1.png" alt="App Store" width="359" height="187"></img>
                                </div>
                                <div class="tp-caption sl1_subtitle ws_nowrap"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['-69','-69','-69','-69']" 

                                        data-fontsize="['12','12','12','12']"
                                        data-fontweight="400"
                                        data-lineheight="['26','26','26','26']"
                                        data-width="['500','500','100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#959595']"

                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'


                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]" >

                                </div>
                                <div class="tp-caption ws_nowrap"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['-3', '-3', '0', '0']" 

                                        data-y="['middle']" 
                                        data-voffset="['0','0','0','0']" 

                                        data-fontsize="['48','48','48','28']"
                                        data-fontweight="600"
                                        data-lineheight="['58', '58', '58', '38']"
                                        data-width="['500','540','100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#333333']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"power2.inOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]" >
                                </div>
                                <div class="tp-caption ws_nowrap wb_all hide_br padding_mobile"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['116','116','116','116']" 

                                        data-fontsize="['14','14','14','14']"
                                        data-fontweight="['400', '400', '400', '400']"
                                        data-lineheight="['26']"
                                        data-width="['570','400','100%','100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#959595']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                        {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,30]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,30]"

                                        >
                                        <h6>With the announcement of this portfolio, 
                                        we'll also be adding more features to work with, 
                                        along with pictures and useful tools.</h6>
                                </div>
                                <div class="tp-caption tp-resizeme"
                                        data-x="['left', 'left', 'center', 'center']" 
                                        data-hoffset="['0']" 

                                        data-y="['middle']" 
                                        data-voffset="['205','205','205','205']" 

                                        data-fontsize="['16','16','16','16']"
                                        data-fontweight="600"
                                        data-lineheight="['16']"
                                        data-width="['100', '100', '100%', '100%']"
                                        data-height="['auto']"
                                        data-whitesapce="['normal']"
                                        data-color="['#01d85f']"

                                        data-type="text" 
                                        data-responsive_offset="off" 

                                        data-frames='[{"delay":0,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                        {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left', 'left', 'center', 'center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,25]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,25]"

                                        >
                                </div>
                                <div class="tp-caption d-md-none d-sm-none d-xs-none d-lg-block"
                                    data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                                {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="right"
                                    data-y="top"
                                    data-hoffset="['-44','-44','0','0']"
                                    data-voffset="['90','90','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    
                                    data-visibility="['on', 'on', 'off', 'off']">
                                    <img src="src/components/images/slider/shape_2.png" alt="App Store"></img>
                                </div>
                                <div class="tp-caption rs-parallaxlevel-1 d-md-none d-sm-none d-xs-none d-lg-block"
                                    data-frames='[{"delay":0,"speed":300,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},
                                            {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'

                                    data-type="image"
                                    data-x="right"
                                    data-y="bottom"
                                    data-hoffset="['87','87','0','0']"
                                    data-voffset="['-146','-146','0','0']"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    
                                    data-visibility="['on', 'on', 'off', 'off']"> 
                                        
                                    
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            <svg preserveAspectRatio="none" viewBox="0 0 100 100"><polygon points="0 100, 100 100, 0 0,100" opacity="1"></polygon></svg>
        </section> 
        </>
    )
}

export default Slider