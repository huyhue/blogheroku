import React, { Component } from 'react';

class lienhe extends Component {
    render() {
        return (
            
<div id="code" className="my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-5">
        <h1 className="text-center">MỤC TIÊU CUỘC SỐNG</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 py-3">
        {/* Kích hoạt modal */}
        <button className="btn btn-danger" data-toggle="modal" data-target="#demo-modal1">PHẬT GIÁO</button>
        {/* Cấu trúc Model */}
        <div className="modal fade" id="demo-modal1">
          <div className="modal-dialog modal-dialog-scrollable ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Phật Giáo cứu khổ</h5>
                <button className="close" data-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              {/* end header */}
              <div className="modal-body">
                <p>Khi sống trên đời chúng ta phải có niềm tin tôn giáo. Là nguồn gốc của mọi vấn đề. Chúng ta phải biết tu tập mỗi ngày, trong mọi giây phút của hiện tại. Tránh làm những chuyện xấu hại mình, hại người. Phải hướng tới giúp đỡ mọi người trong hoàn cảnh khó khăn.</p>
              </div>
              {/* end body */}
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button className="btn btn-primary">Lưu</button>
              </div>
              {/* end footer */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        {/* Kích hoạt modal */}
        <button className="btn btn-info" data-toggle="modal" data-target="#demo-modal2">LẬP TRÌNH</button>
        {/* Cấu trúc Model */}
        <div className="modal fade" id="demo-modal2">
          <div className="modal-dialog modal-dialog-scrollable ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đam mê lập trình</h5>
                <button className="close" data-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              {/* end header */}
              <div className="modal-body">
                <h3>Nghề lập trình giúp ta kiếm sống</h3>
                <p>Trong cuộc sống này ai cũng phải có cái nghề để kiếm tiền. Tìm cái nghề đã khó, vậy làm sao phải đam mê và theo đổi đến cùng. Phải luôn tìm tòi, học hỏi, đổi mới. Rèn luyện và kiên trì liên tục. Trong công việc và học tập phải biết chụi áp lực cao, thử thách không ngại khó. Một lập trình viên phải như là một chiến sĩ đích thực</p>
              </div>
              {/* end body */}
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button className="btn btn-primary">Lưu</button>
              </div>
              {/* end footer */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        {/* Kích hoạt modal */}
        <button className="btn btn-success" data-toggle="modal" data-target="#demo-modal3">TRẢI NGHIỆM</button>
        {/* Cấu trúc Model */}
        <div className="modal fade" id="demo-modal3">
          <div className="modal-dialog modal-dialog-scrollable ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Con người là tập nhiều trải nghiệm</h5>
                <button className="close" data-dismiss="modal">
                  <span>×</span>
                </button>
              </div>
              {/* end header */}
              <div className="modal-body">
                <p>Mỗi trải nghiệm giúp ta trưởng thành hơn trong cuộc sống, biết nhiều điều hơn, luôn đổi mới bản thân mình. Luôn tìm những thử thách khó khăn để thực hiện trong cuộc sống. Điều quan trọng nó cũng giúp ta thư giãn sau giờ làm việc. Có những thứ để sau này còn nhớ lại.</p>
              </div>
              {/* end body */}
              <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button className="btn btn-primary">Lưu</button>
              </div>
              {/* end footer */}
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

export default lienhe;