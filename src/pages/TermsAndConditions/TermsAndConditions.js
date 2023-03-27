import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TermsAccordion from "../../components/TermsAccordion/TermsAccordion";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <div className="accodion-list">
          <TermsAccordion
            title={"General"}
            desc1={
              "The present Terms and Conditions govern the relationship between:"
            }
            desc2={
              "- TOUT DE SWEET, located in Dubai-U.A.E, Shop 14, Block 4, Wasl Square, hereinafter called “the Vendor”,"
            }
            desc3={
              "- and any person or company placing an order online on the present website https://www.toutdesweet.ae/ (hereinafter called the “E-Shop”), for himself/herself or on behalf of a third party, for professional or private purposes, hereinafter called “the Customer”."
            }
            desc4={
              "The Vendor maintains the E-Shop and uses it as a platform to sell the products to the Customer."
            }
            desc5={
              "The Customer declares s/he is above 18 years old and has the capacity to use the E-Shop and to make transactions on it."
            }
            desc6={
              "These Terms and Conditions supersede all other written and verbal communications or agreements with regards to the subject matters discussed in these Terms and Conditions. A waiver or modification of these Terms and Conditions will only be effective if made in writing and signed by an authorized officer of the Vendor."
            }
            desc7={
              "The Vendor may revise these Terms and Conditions from time to time, to comply with up-to-date requirements and standards. These revisions are applicable immediately after their publications on the E-Shop. Therefore, the Customers are encouraged to consult these Terms and Conditions frequently to be aware of the updates, if any."
            }
          />
          <TermsAccordion
            title={"Products"}
            desc1={
              "The products available for sale on the E-Shop are described with as much details as possible by the Vendor, by specifying the components, the size, the weight, the allergens… There may be though some differences in the colors and textures as reflected on the photographs and the actual products. The Vendor cannot be held liable for such discrepancies and the products presentations including the photographs are not contractually binding."
            }
            desc2={
              "The Vendor may modify from time to time, on special occasions for instance, the decoration of the products, without updating the presentations on the E-Shop. The Vendor shall notify the Customer in such circumstances."
            }
            desc3={
              "The products are prepared in the main kitchen of TOUT DE SWEET, where nuts, eggs, gluten, sesame and other allergens are manipulated. The allergens mentioned in the presentations of each product are limited to those directly used to prepare it. There maybe traces of other allergens not specified in the products presentations. The Customer shall notify the Vendor (via email on orders@www.toutdesweet.ae or WhatsApp on +971501077848) in case of severe allergy to a specific ingredient."
            }
          />
          <TermsAccordion
            title={"Orders"}
            desc1={
              "All the products featured on the E-Shop can be ordered exclusively on the E-Shop, during limited periods specified on their relevant presentations. Any order request sent via email or WhatsApp or any other communication channel shall not be validated, and the Vendor shall invite the Customer to place his/her order and settle it via the E-Shop."
            }
            desc2={
              "The Customer shall select the product(s) s/he wants and specify the quantity and his/her cart will be updated accordingly. The Customer acknowledges s/he has to select the Pickup or Delivery date with the preferred timing at the checkout. In case s/he wishes to order more than one product on different dates, s/he shall place separate orders."
            }
            desc3={
              "The Customer may chose to sign up for a customer account by selecting “Create an account” at the first step of the checkout. The Customer will be redirected to a separate page and must fill out the form, provide a valid email address and choose a password that shall remain personal and confidential, and will be required for his/her future transactions on the E-Shop. The Customer is the only one responsible on the protection of his account and shall not share his credentials with any other third party. The Customer accepts that entering these two forms of identification is deemed to be proof of his/her identity and his/her acceptance of these Terms and Conditions. The Customer may also chose to checkout as a “guest” without creating any accounts, but he must fill in accurately the checkout forms."
            }
            desc4={
              "The Customer shall review his cart by clicking “View cart” and check the personal data s/he mentioned in the checkout form, before proceeding to the payment."
            }
            desc5={
              "The Vendor accepts payment by Visa or Mastercard debit and credit cards in AED for its products and services. All the online transactions are also governed by the terms and conditions of the respective payment system providers. The Customer shall review these terms and conditions along with the respective privacy policies before entering any transaction."
            }
            desc6={
              "All the orders and transactions will be confirmed to the Customer via his/her registered email. The Vendor shall not be bound by the Customer’s order until a written confirmation is sent stating he agrees to process the order. The Customer shall send an email to orders@www.toutdesweet.ae if s/he doesn’t receive the confirmation email within one hour after placing his/her order. The parties agree that the emails and all the data recorded by the Vendor are proof of all the Customer’s transactions on the E-Shop. The data recorded by the payment system is proof of financial transactions. The Customer must keep a copy of the transaction records."
            }
          />
          <TermsAccordion
            title={"Order amendment/cancellation"}
            desc1={
              "All the products featured on the E-Shop are prepared in limited editions, are subject to availability and have a shelf life of less than 72 hours. In order to ensure the freshness of the products, they are finalized a few hours before the scheduled delivery/pickup time. Hence the Customer shall allow at least 48 hours notice for the Vendor to process any modifications in the Customer's order."
            }
            desc2={
              "If the Customer wishes to amend the delivery/pickup day or time to an earlier day/time, s/he must notify the Vendor (via email on orders@www.toutdesweet.ae or WhatsApp on +971501077848) at least 48 hours prior the new preferred day/time."
            }
            desc3={
              "If the Customer wishes to postpone the delivery/pickup day or time to another day/time, s/he must notify the Vendor (via email on orders@www.toutdesweet.ae or WhatsApp on +971501077848) at least 48 hours prior the original scheduled pickup/delivery day/time."
            }
            desc4={
              "If the Customer wishes to cancel his/her order, s/he must notify the Vendor (via email on orders@www.toutdesweet.ae or WhatsApp on +971501077848) at least 48 hours prior the original scheduled pickup/delivery day/time. Once the Vendor approves the cancellation request, he commits on processing the refund of the amount to the payment solution initially used by the Customer. The reimbursement may take up to 45 calendar days."
            }
            desc5={
              "The Customer has to be aware of the risk of minor damages that may occur during the transportation, such as, but not limited to, minor deterioration of the frosting or the decoration. The Vendor shall not be liable for such minor damages."
            }
            desc6={
              "Return of products are not accepted, only in case of significant and proven damage of the product(s) or a mistake in processing the order by the Vendor and preparation of wrong product(s). In such case, the Customer is invited  to send an email to customercare@www.toutdesweet.ae and attach photographs of the damaged product(s) within one hour after its delivery or pickup. The Vendor shall contact the Customer on the same day to find a mutual agreement. If the damage is confirmed the Vendor shall offer a partial or full refund as the case may be, or offer replacement product(s) of the same value (excluding the delivery fees) on a future day. If the refund is applicable, it shall be made to the payment solution initially used by the Customer, within 45 calendar days."
            }
          />

          <TermsAccordion
            title={"Pickup and delivery"}
            desc1={
              "All the products featured on the E-Shop are temperature-controlled goods and must be kept refrigerated at a temperature between 4 and 10°C, including during their transportation. The Vendor offer delivery service in Dubai only, at a flat fee of Dhs. 50."
            }
            desc2={
              "If the Customer choses to pickup the ordered product(s) from the Vendor’s shop, s/he has to make sure to transport the package in a vehicle equipped with A/C, and to place it back in the refrigerator within 20 minutes, or to be equipped with a large insulated box (to fit the cake boxes are 22x22x12cm). The Customer shall notify the Vendor (by email on orders@www.toutdesweet.ae or WhatsApp on +971501077848) if s/he wishes to change the pickup time slot on the same day. In case of no show without any notifications from the Customer, his/her order will be cancelled and no refund will be made."
            }
            desc3={
              "If the Customer is eligible for delivery and choses this option at the checkout, s/he will be contacted by the delivery agent on the scheduled delivery day to confirm the delivery time and share the exact location with the delivery agent. The Customer has to confirm his/her availability (or any other authorized person) to collect the product(s) and to place it/them in the refrigerator upon reception. In the case of absence of response from the Customer, the delivery agent will return the product(s) to the shop of the Vendor. The Customer shall arrange for the pickup on the same day, and if s/he fails to do so, the Vendor reserves the right to cancel the order without refund. "
            }
            desc4={
              "The Vendor will make sure that all delivery trucks used by the partner are equipped with temperature trackers. The Vendor will make his best efforts to coordinate between the delivery agent and the Customer to ensure the delivery of the product(s) in the best conditions and within the scheduled time slot. The Vendor must notify the Customer via email on orders@www.toutdesweet.ae and phone call on +971501077848 in case of delay or any other issues."
            }
          />
          <TermsAccordion
            title={"Privacy protection"}
            desc1={
              "In order to process any order on the E-Shop, the Customer must provide personal information. Failing to do so, his/her order will be rejected by the Vendor."
            }
            desc2={
              "This information is strictly confidential. The Vendor undertakes not to divulge or sell the information supplied by the Customer to any third parties. This information shall be used solely to process and manage orders, to issue invoices, to share special offers and updates about our products that may be of an interest to the Customer, without this list being exhaustive."
            }
            desc3={
              "However the Vendor has to release part of the personal information, such as but not limited to the phone number and address, to the company in charge of the delivery, if applicable. The Vendor shall act in good faith while selecting his delivery partners, and shall under no circumstances be liable for the privacy policies of such companies."
            }
            desc4={
              "The Vendor is not responsible for the privacy policies of other websites linked to the E-Shop. If the Customer provides any information to such third parties different rules regarding the collection and use of his/her personal information may apply. S/he should contact them directly and consult their privacy policies."
            }
            desc5={
              "All credit/debit cards details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties."
            }
            desc6={
              "This Website uses cookies. Cookies are small bits of data sent by the server hosting the website to the hard drive of the user’s computer when he/she visits the website. The code in the cookie recognises the computer during future visits and speeds up browsing on the website. Cookies do not contain identifiable personal information. The Customer who doesn’t wish to receive cookies can configure his/her browser to block them. For more details regarding cookies please refer to www.allaboutcookies.org."
            }
            desc7={
              "The Vendor may use non-personal “aggregated data” to run statistical analyzes and enhance the operation of their website. Additionally, if you publish any content on the E-Shop such as a comment or a product review, we may disclose your username or other identifying data with your permission."
            }
            desc8={
              "The Vendor may also disclose personally identifiable information in order to respond to a subpoena, court order or other such request. Your personally identifiable information may be provided to a third party if the Vendor files for bankruptcy, or there is a transfer of the assets or ownership of the  in connection with proposed or consummated corporate reorganizations, such as mergers or acquisitions."
            }
            desc9={
              "The Vendor commits on taking appropriate steps to ensure data privacy and security through various hardware and software methodologies. However, the Vendor cannot guarantee the security of any information that is disclosed online."
            }
            desc10={
              "Minors below the age of 18 are not permitted to use the E-Shop and any Customer must be above the age of 18. However the Vendor cannot verify the age of the customers and hence does not knowingly collect/disclose personal information regarding minors under the age of 18."
            }
            desc11={
              "If at any time the Customer wishes to modify, amend or delete the personal information that he submitted on the E-Shop, s/he can do it directly on the E-Shop on “My account” page or send an email to customercare@www.toutdesweet.ae."
            }
          />
          <TermsAccordion
            title={"Intellectual property"}
            desc1={
              "All text, comments, illustrations and images (the “Online Materials”) reproduced on this E-Shop are copyright. All rights are reserved. Any reproduction in part or in full without the Vendor’s consent is prohibited. Placing an order on the E-Shop does not grant any intellectual property rights of to the Customer and under no circumstances can he, directly or indirectly, own, use, copy, loan, sell, rent, lease, license, sublicense, redistribute, assign or otherwise convey the Online Materials, except as expressly stated in these Terms and Conditions."
            }
            desc2={
              "Nothing in these Terms and Conditions grants any user the right, directly or indirectly, to use the Online Materials to create a product for resale or to use them in any way that competes with the Vendor."
            }
            desc3={
              "The E-Shop may not be used by the Customer for any commercial purposes such as but not limited to the resell of the products featured on the E-Shop. The Customer must obtain the Vendor prior written consent to make commercial offers of any kind on the E-Shop, whether by advertising, solicitations, links, or any other form of communication."
            }
          />
          <TermsAccordion
            title={"Governing law"}
            desc1={
              "All the products featured on the E-Shop are sold exclusively within the United Arab Emirates (U.A.E) and these Terms and Conditions are governed by U.A.E law. The Vendor will not trade with or provide any services to OFAC (Office of Foreign Assets Control) or sanctioned countries in accordance with the law of UAE."
            }
            desc2={
              "Any complaints must be submitted via email to customercare@www.toutdesweet.ae. The Customer and the Vendor should try to find a mutual agreement. Failing to do so, any disputes shall be heard and settled under U.A.E law in a local court, which has sole jurisdiction."
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
