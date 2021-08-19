import React from 'react'
// ============ STYLED COMPONENT IMPORT =======================
import styled from 'styled-components'

// ================ EXTERNAL CSS STYLIING ===========================
import './Policies.css'


// =============================== STYLED COMPONENTS =================================
const Terms = styled.div`
   color: #fff;
   padding: 20px;
   font-family: 'Atkinson Hyperlegible', sans-serif;
`;

const Title = styled.div`
   text-align: center;
   font-size: 30px;
`;
const Content = styled.div`
   padding-top: 20px;
`
// ============================ END OF STYLED COMPONENTS =================================

const Policies = () => {
    return (
        <div>
            {/* ========== STYLED ELEMENT ================= */}
            <Terms>
                <Title>TERMS AND CONDITIONS</Title>
                <p>Last Updated</p>
                {/* ================= ELEMENT 1 ======================== */}
                <Content className="content">
                    <h3>1. Introduction</h3>
                    <p>Welcome to read (“Company”, “we”, “our”, “us”)!</p>
                    <p>
                        These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at read.com (together or individually “Service”) operated by read.
                    </p>
                    <p>
                        Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.

                    </p>
                    <p>
                        Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
                    </p>
                    <p>
                        If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at ukponoakpan270@gmail.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
                    </p>
                </Content>
                {/* ================= ELEMENT 2 ======================== */}

                <Content className="content">
                    <h3>2. Communications</h3>
                    <p>
                        By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at ukponoakpan270@gmail.com.
                    </p>
                </Content>
                <Content className="content">
                    <h3>3. Purchases</h3>
                    <p>
                        If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.
                    </p>
                    <p>
                        You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
                    </p>
                    <p>
                        We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
                    </p>
                </Content>
                {/* ================= ELEMENT 3 ======================== */}

                <Content className="content">
                    <h3>4. Subscription</h3>
                    <p>
                        Some parts of Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles will be set depending on the type of subscription plan you select when purchasing a Subscription.
                    </p>
                    <p>
                        At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or read cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting ukponoakpan270@gmail.com customer support team.
                    </p>
                    <p>
                        A valid payment method is required to process the payment for your subscription. You shall provide read with accurate and complete billing information that may include but not limited to full name, address, state, postal or zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize read to charge all Subscription fees incurred through your account to any such payment instruments.
                    </p>
                    <p>

                    </p>
                </Content>
                {/* ================= ELEMENT 4 ======================== */}

                <Content className="content">
                    <h3>5.  Prohibited Uses</h3>
                    <p>
                        You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
                    </p>
                    <p>
                        0.1. In any way that violates any applicable national or international law or regulation.
                    </p>
                    <p>
                        0.2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.
                    </p>
                    <p>
                        0.3. To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.
                    </p>
                    <p>
                        0.4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.
                    </p>

                </Content>
              <button className="policies_btn">I Agree</button>
            </Terms>

        </div>
    )
}

export default Policies
