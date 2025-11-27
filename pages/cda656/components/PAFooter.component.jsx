import Image from "next/image";
import Link from "next/link";

const PAFooter = () => {
    return (
        <footer className="pa-grid premierappliances__footer" id="footer">
            <div className="premierappliances__footer--content">
                <Link href="#">
                    <Image src="https://lepine-storage.nyc3.digitaloceanspaces.com/cb2b5bb75816d7f619e6a762e749e596.svg" height={50} width={50} />
                </Link>
            </div>
        </footer>
    )
}

export default PAFooter;