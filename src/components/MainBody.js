import React, { Component } from 'react'
import '../css/MainBody.css';
import Graph from '../components/Graph';
import './Count';
import './order';

 class MainBody extends Component {
   
    render() {
        return (
        <div>
           <header>
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  
                  <div style={{width:'500px', height:'300px', backgroundColor:'#F4F7F7',opacity: '.6', border:'solid',borderRadius:'5px'}}>
                  <h3><strong>Quality Academic Writing Service at an Affordable Price.</strong></h3>
                  <h3>Hire us, sit back and relax…….We’ll do it for you.</h3>
                  <div class="row">
                     <div class="col md-6">
                     <a class="btn btn-primary" href="#" role="button">SignUp</a>
                     </div>
                     <div class="col md-6">
                     <a class="btn btn-primary" href="#" role="button">Order Now</a>
                     </div>
                </div> 
                  </div>
                 
               </div>
               <div class="col-md-6">
                  <div style={{width:'370px', height:'400px', backgroundColor:'white',opacity: '.6', border:'solid',borderRadius:'10px', marginLeft:'30%'}}>
                  <form name="myform">
    <select name="memoryItem" onChange="calculatePrice()" id="memoryItem">
       <option value="0">select One Choice from List-Memory Upgrade</option>
       <option value="49">8 GB add $49</option>
       <option value="98">12 GB add $98</option>
       <option value="159">16 GB add $159</option>
    </select>

    <select name="hddItem" onChange="calculatePrice()" id="hddItem">
       <option value="0">select One Choice from List-HDD Upgrade</option>
       <option value="109">1 TB HD add $109</option>
       <option value="150">1.5 TB HD add $150</option>
       <option value="199">2 TB HD add $199</option>
       <option value="299">250 GB SSD add $299</option>
    </select>

    <select name="networkItem" onChange="calculatePrice()" id="networkItem">
       <option value="0">select One Choice from List- Network Upgrade</option>
       <option value="109">56K V90 or X2 Modem add $109</option>
       <option value="79">10/100 NIC add $79</option>
       <option value="279">Combo Modem and NIC add $279</option>
    </select>
</form>

<button type="button" onclick="calculatePrice()">Calculate</button>
The new calculated price:<input type="text" id="PicExtPrice"></input>

                  </div>
               </div>
            </div>
         </div>
      </header>
      <div class="container">
	<div class="row">
    {this.componentWillMount}
	    <br/>
	   <div class="col text-center">
		<h2>Find & Hire Freelancers</h2>
		<p>Browse 3 Million+ Experts Free</p>
		</div>
	</div>
		<div class="row text-center">
	        <div class="col">
	        <div class="counter">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>
       <p class="count-text ">Our Customer</p>
    </div>
	        </div>
              <div class="col">
               <div class="counter">
      <i class="fa fa-coffee fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
      <p class="count-text ">Happy Clients</p>
    </div>
              </div>
              <div class="col">
                  <div class="counter">
      <i class="fa fa-lightbulb fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
      <p class="count-text ">Project Complete</p>
    </div></div>
              <div class="col">
              <div class="counter">
      <i class="fa fa-bug fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="157" data-speed="1500"></h2>
      <p class="count-text ">Coffee With Clients</p>
    </div>
              </div>
         </div>
</div>
<br></br>

         <div class="container">
            <div class="row">
               <div class="col-md-4">
                  <div class="single-service">
                     <i class="fa fa-globe"></i>
                     <h3>List</h3>
                     <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                     <a href="" class="border-btn">Read More</a>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="single-service">
                     <i class="fa fa-code"></i>
                     <h3>Match</h3>
                     <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                     <a href="" class="border-btn">Read More</a>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="single-service">
                     <i class="fa fa-crop"></i>
                     <h3>Hire</h3>
                     <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                     <a href="" class="border-btn">Read More</a>
                  </div>
               </div>
            </div>   
        </div>
        <div class="container">
        <div class="row">
    <div class="col">
    <Graph/> 
    </div>
    <div class="col">
      <h3>Who we are</h3>
      <p>UVOCORP is a reliable partner for professional freelance writers who are looking for a trustworthy
           long-term cooperation. For those pursuing personal development, our company is also the right 
           choice since we offer numerous interesting projects and opportunities for self-improvement.
            Besides, our support team members are always ready to help as they work 24/7.<br></br>
        If writing is what you like, you are welcome to give it a try with us!</p>
    </div>
  </div>
     
    </div>  
 <div class="section-block-grey">
    <div class="container">
        <div class="section-heading center-holder">
            <h3>Doing the right thing at the right time</h3>
            <div class="section-heading-line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                <br></br>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row mt-60">
            <div class="col-md-4 col-sm-12 col-12">
                <div class="serv-section-2">
                    <div class="serv-section-2-icon"> <i class="fas fa-gem"></i> </div>
                    <div class="serv-section-desc">
                        <h4>Planning</h4>
                        <h5>Business Planning</h5> </div>
                    <div class="section-heading-line-left"></div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
                <div class="serv-section-2 serv-section-2-act">
                    <div class="serv-section-2-icon serv-section-2-icon-act"> <i class="fas fa-cogs"></i> </div>
                    <div class="serv-section-desc">
                        <h4>Management</h4>
                        <h5>Retirement Planning</h5> </div>
                    <div class="section-heading-line-left"></div>
                   
                </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
                <div class="serv-section-2">
                    <div class="serv-section-2-icon"> <i class="fas fa-signature"></i> </div>
                    <div class="serv-section-desc">
                        <h4>Accumulation</h4>
                        <h5>Support and Sell</h5> </div>
                    <div class="section-heading-line-left"></div>
                    
                </div>
            </div>
        </div>
		<div class="row mt-60">
            <div class="col-md-4 col-sm-12 col-12">
                <div class="serv-section-2">
                    <div class="serv-section-2-icon"> <i class="fas fa-shield-alt"></i> </div>
                    <div class="serv-section-desc">
                        <h4>Security </h4>
                        <h5>Secure Business</h5> </div>
                    <div class="section-heading-line-left"></div>
                    
                </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
                <div class="serv-section-2 serv-section-2-act">
                    <div class="serv-section-2-icon serv-section-2-icon-act"> <i class="far fa-clock"></i> </div>
                    <div class="serv-section-desc">
                        <h4>24/7 Available </h4>
                        <h5>All time available </h5> </div>
                    <div class="section-heading-line-left"></div>
                   
                </div>
            </div>
            <div class="col-md-4 col-sm-12 col-12">
                <div class="serv-section-2">
                    <div class="serv-section-2-icon"> <i class="fas fa-signature"></i> </div>
                    <div class="serv-section-desc">
                        <h4> Customer Support </h4>
                        <h5>Support and Sell</h5> </div>
                    <div class="section-heading-line-left"></div>
                    
                </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        
        )
    }
}

export default MainBody;
