import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCubes, faQuestion, faShareAlt, faExchangeAlt, faAddressCard, faExpandAlt, faChevronDown, faRedoAlt, faTimes  } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/logo.png'
export default class FabricView extends Component {
    render() {
        return (
            <>
                <div id="wrapper" class="dash_page">
                    <div class="dash_header">
                        <nav class="navbar navbar-fixed-top" role="navigation">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    {/* <!-- <div class="navbar-brand">
                                        <a id="menu-toggle" href="#javscript:;" class="">
                                            <i class="fas fa-bars"></i>
                                        </a>
                                    </div> --> */}
                                    <div class="hyper_logo">
                                        <a href="javascript" class="">
                                            <img src={logo} alt="" class="img-fluid hyper_logo_img"/>
                                                <span>- FABRIC EXPLORER</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="ml-auto">
                                    <div class="dropdown channel_drpdwn">
                                        <a href="javascript" class="dropdown-toggle" role="button" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Select Channel
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="javascript">Composerchannel</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/.nav-collapse --> */}
                            </div>
                        </nav>
                    </div>
                    {/* <!-- Sidebar --> */}
                    <div id="sidebar-wrapper">
                        <nav id="spy">
                            <ul class="sidebar-nav nav side_nav">
                                {/* <!-- <li class="sidebar-brand">
                                    <a href="javascript:;">
                                        <img src="assets/images/logo.png" class="logo_img">
                                    </a>
                                </li> --> */}
                                <li class="post_nav">
                                    <a href="javascript">
                                        <div class="sidenav_icon_div active">
                                            {/* <i class="fas fa-cubes"></i> */}
                                            <FontAwesomeIcon icon={faCubes}/>
                                        </div>
                                        <div class="sidenav_icon_txt">
                                            CHANNEL
                                        </div>
                                    </a>
                                </li>
                                <li class="post_nav">
                                    <a href="javascript">
                                        <div class="sidenav_icon_div">
                                            {/* <i class="fas fa-book"></i> */}
                                            <FontAwesomeIcon icon={faBook}/>
                                        </div>
                                        <div class="sidenav_icon_txt">API</div>
                                    </a>
                                </li>
                                <li class="post_nav">
                                    <a href="javascript">
                                        <div class="sidenav_icon_div">
                                            {/* <i class="fas fa-question"></i> */}
                                            <FontAwesomeIcon icon={faQuestion} />
                                        </div>
                                        <div class="sidenav_icon_txt">HELP</div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- Page content --> */}
                    <div id="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="dashboard_pannel">
                                <div class="dash_top_head">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                            <ul class="list-inline dash_card">
                                                <li class="list-inline-item dash_card_icon">
                                                    {/* <i class="fas fa-share-alt peer_icon"></i> */}
                                                    <FontAwesomeIcon icon={faShareAlt} className='peer_icon'/>
                                                </li>
                                                <li class="list-inline-item dash_card_txt peer_flex">
                                                    PEER
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                            <ul class="list-inline dash_card">
                                                <li class="list-inline-item dash_card_icon">
                                                    {/* <i class="fas fa-cubes block_icon"></i> */}
                                                    <FontAwesomeIcon icon={faCubes} className='block_icon'/>
                                                </li>
                                                <li class="list-inline-item dash_card_txt">
                                                    BLOCK
                                                    <span>9</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                            <ul class="list-inline dash_card">
                                                <li class="list-inline-item dash_card_icon">
                                                    {/* <i class="fas fa-exchange-alt TX_icon"></i> */}
                                                    <FontAwesomeIcon icon={faExchangeAlt} className='TX_icon'/>
                                                </li>
                                                <li class="list-inline-item dash_card_txt">
                                                    TX
                                                    <span>10</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                            <ul class="list-inline dash_card">
                                                <li class="list-inline-item dash_card_icon">
                                                    {/* <i class="far fa-address-card chaincode_icon"></i> */}
                                                    <FontAwesomeIcon icon={faAddressCard} className='chaincode_icon'/>
                                                </li>
                                                <li class="list-inline-item dash_card_txt">
                                                    CHAINCODE
                                                    <span>0</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mb-4">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            BLOCK #5
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-expand-alt"></i> */}
                                            <FontAwesomeIcon icon={faExpandAlt}/>
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">
                                        <div class="table_div">
                                            <table class="table">
                                                <thead id="Udata">
                                                    {/* <!-- <tr class="tableHead">
                                                        <th scope="col">Name</th>
                                                        <th scope="col"></th>
                                                    </tr> --> */}
                                                    {/* <!-- <tr class="tableHead">
                                                        <th scope="col">previous_hash</th>
                                                        <th scope="col">111e1e21fgf1</th>
                                                    </tr> --> */}
                                                    {/* <!-- <tr class="tableHead">
                                                        <th scope="col">data_hash</th>
                                                        <th scope="col">3132d1f2g1dfh1df2hre</th>
                                                    </tr> --> */}
                                                    {/* <!-- <tr class="tableHead">
                                                        <th scope="col">Transaction</th>
                                                        <th scope="col">121ef12e12gfe1g23h2df</th>
                                                    </tr> --> */}
                                                </thead>
                                                <tbody id="UserData">
                                                    {/* <script>
                                                        var url_string = window.location.href;
                                                        var url = new URL(url_string);
                                                        var user_role = url.searchParams.get("id");
                                                        console.log("user_role",user_role)
                                                        fetch("http://3.138.38.80:3111/getUser?id="+user_role)
                          .then(res=> res.json()
                          .then((result)=>{
                                                            console.log("result", result)
                            var temp = ''
                                                        temp +="<tr class='head'><th scope='col'>Name</th>  <th scope='col'>"+result.data.first_name+"</th> </tr>"
                                                        temp +="<tr class='head'><th scope='col'>Email</th>  <th scope='col'>"+result.data.email+"</th> </tr>"
                                                        temp +="<tr class='head'><th scope='col'>Role</th>  <th scope='col'>"+result.data.role+"</th> </tr>"
                                                        temp +="<tr class='head'><th scope='col'>data_hash</th>  <th scope='col'>"+result.data._id+"</th> </tr>"
                                                        temp +="<tr class='head'><th scope='col'>Transaction</th>  <th scope='col'>"+result.data.hash_transaction+"</th> </tr>"


                                                        document.getElementById('UserData').innerHTML = temp;
                          })
                                                        )

                                                    </script> */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            BLOCKLIST
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            {/* <i class="fas fa-times"></i> */}
                                                         {/* <i class="fas fa-expand-alt"></i> */}
                                                         {/* <FontAwesomeIcon icon={faExpandAlt}/> */}
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">
                                        <div class="block5_bodylst">
                                            <div class="">Block</div>
                                            <div class="">TXNs</div>
                                        </div>
                                        <div class="block5_bodylst">
                                            <div class="">#9</div>
                                            <div class="">1</div>
                                        </div>
                                        <div class="block5_bodylst">
                                            <div class="">#9</div>
                                            <div class="">1</div>
                                        </div>
                                        <div class="block5_bodylst">
                                            <div class="">#9</div>
                                            <div class="">1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            BLOCKVIEW
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            {/* <i class="fas fa-times"></i> */}
                                                         {/* <i class="fas fa-expand-alt"></i> */}
                                                         {/* <FontAwesomeIcon icon={faExpandAlt}/> */}
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">
                                        <div class="block5_bodycontent">
                                            <label for="">Identifier [numbers,hash,tag]</label>
                                            <input type="text"/>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Block
                                                        </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                        <label class="form-check-label" for="flexRadioDefault2">
                                                            Transaction
                                                        </label>
                                                </div>
                                                <button class="btn btn-primary">Find</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mb-4">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            NO TRANSACTION
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-expand-alt"></i> */}
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            {/* <i class="fas fa-times"></i> */}
                                                         {/* <i class="fas fa-expand-alt"></i> */}
                                                         <FontAwesomeIcon icon={faExpandAlt}/>
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            PEERLIST
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            {/* <i class="fas fa-times"></i> */}
                                                         {/* <i class="fas fa-expand-alt"></i> */}
                                                         {/* <FontAwesomeIcon icon={faExpandAlt}/> */}
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">
                                        {/* <!-- <div class="block5_bodylst">
                                            <div class="">name</div>
                                            <div class="">org</div>
                                            <div class="">mspid</div>
                                            <div class="">request</div>
                                        </div> --> */}
                                        <div class="table_div">
                                            <table class="table">
                                                <thead>
                                                    <tr class="tableHead">
                                                        <th scope="col">name</th>
                                                        <th scope="col">org</th>
                                                        <th scope="col">mspid</th>
                                                        <th scope="col">request</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="tableBody">
                                                        <td>peer1</td>
                                                        <td>peerOrg1</td>
                                                        <td>Org1Msp</td>
                                                        <td>grpc//:12.1221.45</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* <!-- <div class="block5_bodylst">
                                            <div class="">peer1</div>
                                            <div class="">peerOrg1</div>
                                            <div class="">OrgMsp1</div>
                                            <div class="">grpc//:121.215.1.121</div>
                                        </div> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mb-4">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            TRANSACTION SEC
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-expand-alt"></i> */}
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            {/* <i class="fas fa-times"></i> */}
                                                         {/* <i class="fas fa-expand-alt"></i> */}
                                                         <FontAwesomeIcon icon={faExpandAlt}/>
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mb-4">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            TRANSACTION MIN
                                        </div>
                                        <div class="block5_headrgt">
                                                       {/* <i class="fas fa-expand-alt"></i> */}
                                                       <FontAwesomeIcon icon={faExpandAlt}/>
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            BLOCKS/MIN
                                        </div>
                                        <div class="block5_headrgt">
                                                      {/* <i class="fas fa-expand-alt"></i> */}
                                                      <FontAwesomeIcon icon={faExpandAlt}/>
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mb-4">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="block5_div">
                                    <div class="block5_head">
                                        <div class="block5_headlft">
                                            CHAINCODE LIST
                                        </div>
                                        <div class="block5_headrgt">
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            {/* <i class="fas fa-times"></i> */}
                                                         {/* <i class="fas fa-expand-alt"></i> */}
                                                         <FontAwesomeIcon icon={faExpandAlt}/>
                                            {/* <i class="fas fa-chevron-down"></i> */}
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                            {/* <i class="fas fa-redo-alt"></i> */}
                                            <FontAwesomeIcon icon={faRedoAlt}/>
                                            {/* <i class="fas fa-times"></i> */}
                                            <FontAwesomeIcon icon={faTimes}/>
                                        </div>
                                    </div>
                                    <div class="block5_body">
                                        <div class="block5_bodylst">
                                            <div class="">name</div>
                                            <div class="">version</div>
                                            <div class="">path</div>
                                            <div class="">trans</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
