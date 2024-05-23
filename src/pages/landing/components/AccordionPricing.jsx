import  { useState } from 'react';

const sections = [
  {
    title: 'What is Board Pins?',
    content: 'Content for section 1',
  },
  {
    title: 'Is it free to sign up for Board Pins?',
    content: 'Content for section 2',
  },
  {
    title: 'What types of service providers can I find on Board Pins?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: 'Can I contact service providers directly?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: 'How do I collaborate with service providers on Board Pins?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: 'Is communication with service providers secure?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: 'Is my business information secure on Board Pins?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: ' How do I pay service providers?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: ' Is my business information secure on Board Pins?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: '   Can I see reviews of service providers?',
    content: 'Can I contact service providers directly?',
  },
  {
    title: ' What happens after a project is completed?',
    content: 'Can I contact service providers directly?',
  },

 
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="p-4  bg-[#F5F6FA] ">
      {sections.map((section, index) => (
        <div className="space-y-2" key={index}>
          <div
            className="bg-gray-100 border-b-2 border-gray-200 flex justify-between items-center px-4 py-2 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div>
            <h3  className=' text-[1.4rem] text-[#1E1E1E] opacity-[50] font-[500]'>     {section.title}</h3>
            
        </div>
            <div>{activeIndex === index ? '-' : '+'}</div>
          </div>
          {activeIndex === index && (
            <div className="bg-gray-50 p-4 bg-[#F5F6FA] ">
            <h3  className=' text-[1rem] opacity-75 font-bold bg-[#F5F6FA]'> {section.content}</h3>
             
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
