const Page = require("./partials/Page");
const Head = require("./partials/Head");
const Header = require("./partials/Header");
const Nav = require("./partials/Nav");
const Footer = require("./partials/Footer");

module.exports = class extends Page {
    render(sPage) {
        return `
<!DOCTYPE html>
<html lang="en" class="${sPage}">
    <head>
    ${new Head().render()}
    <title>Contact</title>
    </head>
    <body>
    <main>
    ${new Header().render()}
    ${new Nav().render()}
    ${this.requireMarked('pages/contact.md')};
    <form id="Contact-Form" action="${this.sUrlToEmailer}" method="post">
        <input type="text" name="name" placeholder ="enter name here" required/><br />
        <input type="email" name="email" placeholder ="enter email here" required /><br />
        <textarea name="message" placeholder="enter your message here" required></textarea><br />
        <button type="submit">Send</button>
    </form>
    </main>
    ${new Footer().render()}
    </body>
</html>
        `;
    }
}

