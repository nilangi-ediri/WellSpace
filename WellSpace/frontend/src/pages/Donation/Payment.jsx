import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NavigationBar from '../../components/Navbar';

const PageWrapper = styled.div`
  background: linear-gradient(135deg, #e0f7fa 0%, #00796b 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Add some padding to avoid the container touching the edges */
`;

const Container = styled.div`
  width: 100%; /* Set width to 100% */
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  text-align: center; /* Center text */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-top: 40px; /* Increased space above sections */
  margin-bottom: 20px; /* Increased space below sections */
  color: #333;
  font-weight: bold;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
  width: 100%;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #333;
  }

  input {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    color: blue; /* Blue color for card type */
    display: block;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const GooglePayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px; /* Added space between Google Pay and cancel button */
`;

const PayPalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CancelButton = styled.a`
  background-color: transparent;
  color: teal;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  align-self: flex-start;

  &:hover {
    background-color: rgba(0, 128, 128, 0.1);
  }
`;

const Payment = () => {
  const [cardType, setCardType] = useState('');

  const handleCardNumberChange = (e) => {
    const cardNumber = e.target.value;
    if (cardNumber.startsWith('4')) {
      setCardType('Visa');
    } else if (cardNumber.startsWith('5')) {
      setCardType('MasterCard');
    } else {
      setCardType('');
    }
  };

  useEffect(() => {
    const script2 = document.createElement('script');
    script2.src = 'https://pay.google.com/gp/p/js/pay.js';
    script2.onload = () => {
      const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: 'TEST' });

      const button = paymentsClient.createButton({
        onClick: () => {
          const paymentDataRequest = getGooglePaymentDataRequest();
          paymentsClient.loadPaymentData(paymentDataRequest)
            .then(paymentData => {
              console.log("Payment was successful!", paymentData);
              window.location.href = "confirmation.html";
            })
            .catch(err => console.error(err));
        }
      });
      const googlePayButtonContainer = document.getElementById('google-pay-button');
      googlePayButtonContainer.innerHTML = '';
      googlePayButtonContainer.appendChild(button);
    };
    document.body.appendChild(script2);

    function getGooglePaymentDataRequest() {
      return {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: { gateway: 'example', gatewayMerchantId: 'exampleGatewayMerchantId' }
          }
        }],
        merchantInfo: { merchantId: '01234567890123456789', merchantName: 'Example Merchant' },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '25.00',
          currencyCode: 'USD',
          countryCode: 'US'
        }
      };
    }

    return () => {
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
    <NavigationBar />
    <PageWrapper>
      <Container>
        <Title>Complete Your Donation</Title>
        <Description>Please select your payment method:</Description>

        <Form id="paymentForm" action="confirmation.html" method="POST">
          <SectionTitle>Credit Card</SectionTitle>
          <InputGroup>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              required
              onChange={handleCardNumberChange}
            />
            <span>{cardType}</span>
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="CVV" required />
          </InputGroup>
          <Button type="submit">Complete Donation</Button>
        </Form>

        <SectionTitle>PayPal</SectionTitle>
        <PayPalButtonContainer>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="YOUR_PAYPAL_EMAIL" />
            <input type="hidden" name="item_name" value="Donation" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{ display: 'block', margin: '0 auto' }} />
          </form>
        </PayPalButtonContainer>

        <SectionTitle>Google Pay</SectionTitle>
        <GooglePayButtonContainer id="google-pay-button"></GooglePayButtonContainer>

        <CancelButton href="/donation">Cancel and return</CancelButton>
      </Container>
    </PageWrapper>
    <Footer />
    </>
  );
};

export default Payment;
