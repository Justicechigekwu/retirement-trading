

const Retirement = () => {
  const image = [
    'img-20250625-wa001.jpg',
    'img-20250625-wa002.jpg',
    'img-20250625-wa003.jpg',
    'img-20250625-wa004.jpg',
    'img-20250625-wa005.jpg'
  ];
  const photo = [
    'img-20250625-wa006.jpg',
    'img-20250625-wa007.jpg',
    'img-20250625-wa008.jpg',
    // 'img-20250625-wa009.jpg',
    // 'img-20250625-wa0010.jpg',
    'img-20250625-wa0011.jpg',
    'img-20250625-wa0012.jpg',
    'img-20250625-wa0013.jpg',
    'img-20250625-wa0014.jpg',
    'img-20250625-wa0015.jpg',
    'img-20250625-wa0016.jpg',
  ]; 
  const handleClick = () => {
    const phoneNumber = '2347049887168';
    const message = 'Hello Coach Alex, I’m interested in your trading Software, how do I get started.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };
  return (
    <div>
      <div className='container'>
        <h1>
          <span style={{color: 'red'}}>DICOVER</span> the <span style={{color: 'red'}}>PLUG</span> and <span style={{color: 'red'}}>PLAY</span> on how I made my first $3000 using the <span style={{color: 'red'}}>'Retirement trading bot'</span>
        </h1>
        <h4>
          Embark on a profitable journey today by connecting with me! Discover how I, along with numerous others, have been constantly enerating significant profits daily by harnessing the power of trading software in the forex market using a bot, below are results of my bot in action from users.
        </h4>
      </div>
      <div className='images'>
        {image.map( (name, index) => (
          <img 
            key={index}
            src={`/images/${name}`}
            alt={`images ${index + 1}`}
          />
        ))}
      </div>
      
      <button onClick={handleClick}>
        Click here to get started
      </button>

      <div className=''>
        <h2 style={{color: 'red'}}>
          UNIQUE FEAUTURES OF THIS TRADING SOFTWARE & REASONS WHY IT CAN'T BLOW YOUR ACCT
        </h2>
        <p>
          1. Automated Order Execution: Places buy/sell trades automatically based on pre-set rules or strategies. No manual intervention needed.
        </p>

        <p>
            2. Strategy Customization: Supports indicators like RSI, MACD, EMA, scalp, etc.
          </p> 
          
          <p>
            3. Backtesting: Tests the bot’s strategy on historical data to evaluate performance.
          </p>
          
          <p>
             4. Risk Management: Protects capital and manages exposure.
          </p>
          
         <p>
            5. 24/5 Operation: Trades non-stop, even when the user is offline or asleep.
            Ideal for markets like crypto or forex.
         </p>
          
          <p>
             7. Real-Time Market Monitoring: 
             Continuously scans the market for trade opportunities. Responds faster than a human trader.
          </p>
          
          <p>
            8.Doesn’t Trade Martingale Strategy.
          </p>
      </div>

      <h3 style={{color: 'red'}}>
        BELOW ARE MORE TESTIMONY FROM PEOPLE WHO ARE USING THE ROBOT
      </h3> 

      <div className='photo-scroll'>
       {photo.map( (name, index) => (
        <img
         key={index}
         src={`/images/${name}`}
         alt={`images ${index + 1}`}
        />
      ))}
      </div>

      <button onClick={handleClick}>
        Click here to get started
      </button>
      
      <footer style={{ textAlign: 'center', padding: '20px 0' }}>
        <p>&copy; 2025 Jgracelyfx. All rights reserved. No part of this content may be reproduced without permission.
      </p>
      </footer>
    </div>
  )
}

export default Retirement