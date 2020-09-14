import React, { Component } from 'react';

class blog extends Component {
    render() {
        return (
            <div>
  <div className="row banner">
    <div className="col-md-6">
      <h1>Tận hưởng cuộc sống hàng ngày</h1>
      <p>Tận hưởng cuộc sống hàng ngày bằng những ly cafe vào buổi sáng, hít thở không khí trong lành</p>
      <a href="/login" className="express-btn">LOGIN</a>
      <a href="/Signup" className="express-btn">SIGN UP</a>
    </div>
    <div className="col-md-6 text-center">
      <img src="https://huyhue.github.io/bloghuyhue/nobg.png" className="img-fluid" />
    </div>
  </div>
  {/* service */}
  <div id="service">
    <div className="container">
      <h2 className="title">We provide a wide range<br />of service</h2>
      <p className="subtitle">Let's start ordering with YOGO app to save a huge money today</p>
      <div className="row">
        <div className="col-md-4">
          <div className="service-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHBoL7IN6L_u8kia4wzypfFbhBgScEVwbSTBxLP3n-8Sg5QQ1&s" alt="" />
            <h6>Express Delivery</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, qui.</p>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box active-service">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlVfj761RltQMwR5vjFJARn92avlh__iI5gPYFe0bMsavfkPbSw&s" alt="" />
            <h6>Offer Arround You</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, qui.</p>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <img src="https://cdn3.iconfinder.com/data/icons/emotions-1/154/emotion-happy-look-thanks-ok-accept-512.png" alt="" />
            <h6>Pocket Friendly</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, qui.</p>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="feature text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://static.bongda24h.vn/medias/standard/2019/12/7/video-u22-viet-nam-3-0-u22-campuchia-duc-chinh-danh-dau.jpg" alt="" />
        </div>
        <div className="col-md-6">
          <h2>We always love to hear from <br /> our customer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Assumenda, qui.</p>
          <a href>WATCH NOW</a>
        </div>
      </div>
    </div>
  </div>
  {/* explore */}
  <div id="explore">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>How does YOGO make <br /> life better</h2>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Assumenda, qui.</p>
          <a href>EXPLORE NOW</a>
        </div>
        <div className="col-md-6">
          <img src="http://www.nhahangsapa.com/nhahangsapa-images/news/photo/anh-dep-ruong-bac-thang.jpg" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  {/* review */}
  <div id="review">
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.iconninja.com/files/724/464/875/member-blond-person-profile-human-user-account-man-white-avatar-people-face-male-icon.png" />
            <div className="carousel-caption">
              <h6>Jennifer Lopes</h6>
              <small>CEO &amp; FOUNDER @ Microsort</small>
              <p>Nulla vitae elit libero, a pharetra<br />elit libero augue mollis interdum. Nulla vitae elit libero, a pharetra<br />elit libero augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tTnrcHQFAqu2e2oZxV4AfBlbOgbyVjAjU2wNstWhQPTa6hHr&s" />
            <div className="carousel-caption">
              <h6>George Symonds</h6>
              <small>SENIOR MANAGER @ Google</small>
              <p>Nulla vitae elit libero, a pharetra<br />elit libero augue mollis interdum. Nulla vitae elit libero, a pharetra<br />elit libero augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2VyN8U_bKCNvzKT4fDsEygCaeqhvuQGvXn0foGTQIQc9U28V&s" />
            <div className="carousel-caption">
              <h6>Ying Yue</h6>
              <small>FASION DESIGNER @ Myntra</small>
              <p>Nulla vitae elit libero, a pharetra<br />elit libero augue mollis interdum. Nulla vitae elit libero, a pharetra<br />elit libero augue mollis interdum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default blog;