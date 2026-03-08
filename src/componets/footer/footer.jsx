import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="footer-logo">
          <i class="fa-brands fa-asymmetrik"></i> Moses Portfolio
        </div>
        <div>
          <div>
            <a href="#">
              projects <h3>carpool system</h3>
            </a>
          </div>
          <h3>about me</h3>
          <h3>projects</h3>
          <h3></h3>
        </div>
        <div class="footer-contact">
          <p>
            <i class="fas fa-phone-alt"></i> +12 345 678 900
          </p>
          <p>
            <i class="fas fa-envelope"></i> mosesnzioka1@gmail.com
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> Eldoret, Kenya - 62617.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Moses Portfolio. All Rights Reserved</p>
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest-p"></i>
          </a>
          <a href="#">
            <i class="fab fa-vk"></i>
          </a>
        </div>
        <a href="#" class="scroll-top-btn">
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
