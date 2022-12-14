function Footer(){
    const d = new Date();
    let year = d.getFullYear();
    return <footer>
        <div className="Footer">
            <p>Copyright@ {year}</p>
        </div>  
    </footer>;
}

export default Footer;