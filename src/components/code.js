import React, { Component } from 'react';

class code extends Component {
    render() {
        return (
            <div>
              <div>
                <nav>
                <ol className="breadcrumb pl-5">
                    <li className="breadcrumb-item">
                    <a href="/code">Inside</a>
                    </li>
                    <li className="breadcrumb-item">
                    <a href="/code1">Outside</a>
                    </li>
                    <li className="breadcrumb-item active">
                    <a href="/code2">Outsource</a>
                    </li>
                </ol>
                </nav>
            </div>
                <div id="code">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-5">
        <h1 className="text-center">FPT UNIVERSITY</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 bg-warning">
        <div className="list-group ">
          <a href="#tab-1" className="list-group-item list-group-item-action " data-toggle="list">SEMESTER 1</a>
          <a href="#tab-2" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 2</a>
          <a href="#tab-3" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 3</a>
          <a href="#tab-4" className="list-group-item list-group-item-action active" data-toggle="list">SEMESTER 4</a>
          <a href="#tab-5" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 5</a>
          <a href="#tab-6" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 6</a>
          <a href="#tab-7" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 7</a>
          <a href="#tab-8" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 8</a>
          <a href="#tab-9" className="list-group-item list-group-item-action" data-toggle="list">SEMESTER 9</a>
        </div>
      </div>
      <div className="col-md-8">
        <div className="tab-content">
          <div className="tab-pane fade show m-4" id="tab-1">
            <h3>MAE101 - Mathematics for Engineering</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Ôn lại toán cấp 3</li>
              <li>Một số kiến thức về ma trận</li>
            </ul>
            <h3>CEA201 - Computer Organization and Architecture</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Môn nay max khó luôn</li>
            </ul>
            <h3>CSI101 - Connecting to Computer Science</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Kiến thức nhập môn máy tính</li>
            </ul>
            <h3>PRF192 - Programming Fundamentals</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href="https://github.com/huyhue/C-Language">Lập trình C</a></li>
            </ul>
            <h3>SSG101 - Working in Group Skills</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Kĩ năng làm việc nhóm</li>
            </ul>
          </div>
          <div className="tab-pane fade show m-4" id="tab-2">
            <h3>DBI202 - Introduction to Databases</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href="https://www.howkteam.vn/course/su-dung-sql-server/khoa-ngoai-trong-sql-server-1429" data-toggle="tooltip" title="Học youtube and code có sẵn trên web">Study knowlegde</a></li>
              <li><a href="https://drive.google.com/drive/folders/1jp5oTGKLe4nGfWw752yl2W5SMQg_Xpm6?usp=sharing">Slide</a></li>
              <li><a href="https://quizlet.com/283436881/dbi202-full-flash-cards/">Câu hỏi trắc nghiệm</a></li>
              <li>Ghi chép trên vở</li>
            </ul>
            <h3>PRO201 - Front-end Web Development</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href="https://drive.google.com/drive/folders/1nQk0CJatIy1lxj-uK9p1a7D-H1PlAGHs?fbclid=IwAR0RrxVOZyWooEI_x2erTRaa-t0QhIGOHkRmGopawGYBfnmf7rOwia0Fimw">Document</a></li>
              <li>Code tutorial on my facebook</li>
              <li><a href="https://drive.google.com/drive/folders/1_jb-8C-9ILZL99Aep0YnfHHDtyXvU1Wo?usp=sharing">Certification Coursea</a></li>
              <li>Study Online Coursea</li>
            </ul>
            <h3>PRO192 - Object-Oriented Programming</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Nắm vững những khái niệm cơ bản</li>
              <li><a href="https://drive.google.com/drive/folders/1jp5oTGKLe4nGfWw752yl2W5SMQg_Xpm6">Slide and Workshop</a></li>
              <li><a href="https://github.com/huyhue/core-java">Core Java</a></li>
            </ul>
            <h3>MAD101 - Discrete mathematics</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href="https://drive.google.com/drive/folders/1jp5oTGKLe4nGfWw752yl2W5SMQg_Xpm6">Slide and exam</a></li>
              <li>Hơi mơ hồ nhưng phải nắm chắc</li>
              <li>Liên quan đến sau này</li>
            </ul>
            <h3>LAB101 - C Lab</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href="https://drive.google.com/drive/folders/1VXCUqOPP2JZUtEptxHp6OgUPfDGqh-2q">Question</a></li>
              <li><a href="https://github.com/huyhue/C-Language/tree/master/LABC">Answer</a></li>
            </ul>
          </div>
          <div className="tab-pane fade show m-4" id="tab-3">
            <h3>JPD111 - Japanese Elememtary</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Nền tảng căn bản của tiếng Nhật</li>
              <li>Các công ty IT tuyển dụng rất cần tiếng Nhật</li>
              <li>Học mỗi ngày buổi sáng để không quên</li>
              <li><a href="https://quizlet.com/vn/516862497/se_ky-3_jpd111-flash-cards/">Học từ vựng</a></li>
              <li><a href="https://quizlet.com/vn/516862646/se_ky-3_jpd111-kanji-flash-cards/">Học từ vựng Kanji</a></li>
            </ul>
            <h3>OSG202 - Operating System</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Hiểu về cách thức của hệ điều hành</li>
              <li>Sử dụng hệ điều hành Ubuntu</li>
              <li><a href="https://drive.google.com/drive/folders/1utuHiCO-g7CHZ0bH4-kiJhBor3ZJWKzk?usp=sharing">Document</a></li>
            </ul>
            <h3>CSD201 - Data Structures and Algorithm</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Chú trọng rèn luyện tư duy thuật toán</li>
              <li>Đây là môn khá khó, nặng về tư duy nhiều.</li>
              <li><a href="https://drive.google.com/drive/folders/1utuHiCO-g7CHZ0bH4-kiJhBor3ZJWKzk?usp=sharing">Document</a></li>
              <li><a href="https://github.com/huyhue/Algorithrm-and-Structure">Code about algorithm</a></li>
            </ul>
            <h3>PRJ311 - Desktop Java Applications</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li>Rất nhiều thứ cần học</li>
              <li><a href="https://yellowcodebooks.com/category/lap-trinh-java/">Thread</a><a href="https://www.youtube.com/watch?v=HgJKbovIztI&list=PL1v1mEr0JwcC8PPdx462qTeR8EvweHCB4">  Networking</a></li>
              <li><a href="https://www.youtube.com/watch?v=zgFGnzpXk2k">Kết hợp JFrame với JPanel </a><a href="https://www.youtube.com/watch?v=DKEI4W3U35U"> Kết nối sql server</a></li>
              <li><a href="https://quizlet.com/vn/516862275/se_ky-3_prj311-flash-cards/">Quizlet</a></li>
              <li><a href="https://drive.google.com/drive/folders/1utuHiCO-g7CHZ0bH4-kiJhBor3ZJWKzk?usp=sharing">Document</a></li>
              <li><a href="https://github.com/huyhue/Java-Desktop-Application">Code and application in studying</a></li>
            </ul>
            <h3>LAB211 - OOP with Java Lab</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href="https://drive.google.com/drive/folders/1WiB6heFAMTySzR6EBAFgKPA5trU3Wwgd">Question</a></li>
              <li><a href="https://github.com/thaycacac/java/tree/master/%5BLAB211%5D%20OOP%20with%20Java%20Lab">Tất cả đều có ở đây</a></li>
              <li>Cần xây đựng các code java mẫu để copy cho nhanh</li>
            </ul>
          </div>
          <div className="tab-pane active fade show m-4" id="tab-4">
            <h3>NWC202 - Computer Networking</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>PRJ321 - Web-Based Java Applications</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>SWE102 - Introduction to Software Engineering</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>JPD121 - Elementary Japanese 1.2</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>LAB221 - Desktop Java Lab</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
          </div>
          <div className="tab-pane fade show m-4" id="tab-5">
            <h3>NWC202 - Computer Networking</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>PRO201 - Front-end Web Development</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>PRO192 - Object-Oriented Programming</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>MAD101 - Discrete mathematics</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
            <h3>LAB101 - C Lab</h3>
            <ul style={{listStyleType: 'circle'}}>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
              <li><a href /></li>
            </ul>
          </div>
          <div className="tab-pane fade show m-4" id="tab-6">
            <h1>OK 6</h1>
          </div>
          <div className="tab-pane fade show m-4" id="tab-7">
            <h1>OK 7</h1>
          </div>
          <div className="tab-pane fade show m-4" id="tab-8">
            <h1>OK 8</h1>
          </div>
          <div className="tab-pane fade show m-4" id="tab-9">
            <h1>OK 9</h1>
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

export default code;