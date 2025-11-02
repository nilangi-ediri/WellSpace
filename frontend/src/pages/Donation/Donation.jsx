import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PageWrapper = styled.div`
  background: linear-gradient(135deg, #e0f7fa 0%, #00796b 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Add padding to avoid the container touching the edges */
`;

const Container = styled.div`
  width: 100%; /* Set width to 100% */
  max-width: 600px;
  margin: 40px auto; /* Add margin at top and bottom */
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
  text-align: center; /* Center text */
  font-weight: bold
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
  text-align: center; /* Center text */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center text */
`;

const AmountOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? '#00796b' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#00796b' : '#f1f1f1')};
  }

  &:active,
  input:checked + & {
    background-color: #00796b;
    color: #fff;
    border-color: #0056b3;
  }
`;

const Input = styled.input`
  display: none;
`;

const NumberInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: block;

  &:disabled {
    background-color: #f1f1f1;
    color: #999;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: teal; /* Theme color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Donation = () => {
  const [customAmountDisabled, setCustomAmountDisabled] = useState(true);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    if (e.target.id === 'custom') {
      setCustomAmountDisabled(false);
      setSelectedAmount('');
    } else {
      setCustomAmountDisabled(true);
      setCustomAmount('');
      setSelectedAmount(e.target.value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedAmount || customAmount) {
      navigate('/payment');
    }
  };

  return (
    <>
    <NavigationBar/>
    <PageWrapper>
      <Container>
        <Title>Support Our Cause</Title>
        <Description>Your donation will help us continue our efforts.</Description>
        <Form id="donationForm" onSubmit={handleFormSubmit}>
          <AmountOptions>
            <Input
              type="radio"
              id="amount50"
              name="amount"
              value="50"
              onChange={handleAmountChange}
              checked={selectedAmount === '50'}
            />
            <Label htmlFor="amount50" selected={selectedAmount === '50'}>$50</Label>

            <Input
              type="radio"
              id="amount100"
              name="amount"
              value="100"
              onChange={handleAmountChange}
              checked={selectedAmount === '100'}
            />
            <Label htmlFor="amount100" selected={selectedAmount === '100'}>$100</Label>

            <Input
              type="radio"
              id="amount200"
              name="amount"
              value="200"
              onChange={handleAmountChange}
              checked={selectedAmount === '200'}
            />
            <Label htmlFor="amount200" selected={selectedAmount === '200'}>$200</Label>

            <Input
              type="radio"
              id="custom"
              name="amount"
              value="custom"
              onChange={handleAmountChange}
              checked={!selectedAmount && !customAmountDisabled}
            />
            <Label htmlFor="custom" selected={!selectedAmount && !customAmountDisabled}>Custom</Label>
            <NumberInput
              type="number"
              id="customAmount"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              disabled={customAmountDisabled}
            />
          </AmountOptions>
          <Button type="submit" disabled={!selectedAmount && !customAmount}>
            Donate Now
          </Button>
        </Form>
      </Container>
    </PageWrapper>
    <Footer/>
    </>
  );
};

export default Donation;
