export default function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {fullYear}</p>
    </footer>
  );
}
