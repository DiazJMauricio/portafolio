import React, { Component } from "react";
import ContactPageLayout from "../Layouts/ContactPageLayout";
import ContactContent from "../Layouts/ContactContent";
import ContactButtons from "../Layouts/ContactButtons";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <ContactPageLayout>
        {/* <ContactButtons selectScreen={this.props.selectScreen} /> */}
        <ContactContent />
      </ContactPageLayout>
    );
  }
}

export default ContactPage;
