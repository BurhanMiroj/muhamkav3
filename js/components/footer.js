class Footer extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        const time = new Date();
        const year = time.getFullYear();
        const thisYear = document.innerHTML = year;

        this.innerHTML = `
            <!-- START : Footer Area-->
            <footer class="container border-top">
            <div class="row m-0">
                <div class="col-12">
                    <div class="row">
                    <!-- Multi-column 1 of 3-->
                    <div class="col-md-4 mt-4 footer-content">
                        <h6 class="my-4">SMK Muhamka</h6>
                        <ul class="list-unstyled pb-4">
                            <li class="footer-list"><a href="/index.html">Home</a></li>
                            <li class="footer-list"><a href="#">Tentang Kami</a></li>
                            <li class="footer-list"><a href="/pages/progdi.html">Progdi</a></li>
                            <li class="footer-list"><a href="#">Lowongan Pekerjaan</a></li>
                        </ul>
                    </div>
                    <!-- Multi-column 2 of 3 -->
                    <div class="col-md-4 mt-4 footer-content">
                        <h6 class="my-4">Developers</h6>
                        <ul class="list-unstyled pb-4">
                            <li class="footer-list"><a href="#">Contact Developers</a></li>
                        </ul>
                    </div>
                    <!-- Multi-column 3 of 3 -->
                    <div class="col-md-4 mt-5 footer-content">
                    <div class="d-none d-md-flex">
                        <img src="/img/logo.png" alt="Logo SMK Muhamka">
                    </div>
                        <ul class="list-unstyled d-block mt-4">
                            <li class="d-inline">
                                <a target="_blank" href="https://www.instagram.com/smkmuhamka/?hl=id" class="mr-3"><i class="fab fa-instagram-square text-secondary fs-5 mr-3"></i></a>
                            </li>
                            <li class="d-inline">
                                <a target="_blank" href="https://www.youtube.com/c/SMKMuhamka/videos" class="mr-3"><i class="fab fa-youtube text-secondary fs-5 mx-3"></i></a>
                            </li>
                            <li class="d-inline">
                                <a target="_blank" href="https://www.facebook.com/SMK-Muhammadiyah-Kajen-509128705856891/" class="mr-3"><i class="fab fa-facebook-square text-secondary fs-5"></i></a>
                            </li>
                        </ul>      
                    </div>
                    <!-- Full-width column --> 
                    <div class="col-12">
                        <!-- Footer Item Content -->
                        <div class="copyright-section text-center pt-2 text-sm">
                            <p>Copyright &copy; <span class="copyright">${thisYear}</span> <a href="#">Smk Muhammadiyah Kajen</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                <!-- End of Full-width multi-column -->
            </div>    
            </footer>
        <!-- END : Footer Area -->
      `;
    }
 }
 
customElements.define("custom-footer", Footer);
