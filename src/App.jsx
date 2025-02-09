import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './App.css'
import Select from './components/Select'
import Stepper from './components/Stepper';
import Carousel from './components/Carousel';
import Toast from './components/Toast';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Input from './components/Input';
import DataTable from './components/DataTable';
import DynamicForm from './components/DynamicForm';
import FlexibleFilter from './components/FlexibleFilter';

function App() {
    const [selectedValue, setSelectedValue] = useState('');
    const [viewCode, setViewCode] = useState(false);
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState(false);
    const [info, setInfo] = useState(false);
    const [danger, setDanger] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };
    const handleCodeView = () => {
        setViewCode(!viewCode); 
    }
    const sucessToast = () => {
      return <Toast success={true} message="Success! toast is posted" duration={3000} />
    }
    const dangerToast = () => {
      return <Toast danger={true} message="An error occured" duration={10000} />
    }
    const infoToast = () => {
      return <Toast info={true} message="Critical lmao is given" duration={3000} />
    }
    const warningToast = () => {
      return <Toast warning={true} message="There might be an issue" duration={3000} />
    }
    const handleSuccess = () => {
      setSuccess(true);
      setTimeout(() => { 
        setSuccess(false);
      }, 1800);
    }
    const handleDanger = () => {
      setDanger(true);
      setTimeout(() => { 
        setDanger(false);
      }, 1800);
    }
    const handleInfo = () => {
      setInfo(true);
      setTimeout(() => { 
        setInfo(false);
      }, 1800);
    }
    const handleWarning = () => {
      setWarning(true);
      setTimeout(() => { 
        setWarning(false);
      }, 1800);
    }
    const toggleModal = () => {
      setShowModal(!showModal);
    }
    const passwordChecker = (value) => {
      if(value.length < 8) {
      return {isValid: false, message: "At least 8 characters"};
      }
      if(!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return {isValid: false, message: "At least one special character"};
      }
      if(!/\d/.test(value)) {
      return {isValid: false, message: "At least one numeric character"};
      }
      return {isValid: true, message: "Password is strong"};
    }
    const formConfig = [
      { name: 'username', label: 'User', type: 'text', defaultValue: '' },
      { name: 'email', label: 'Email', type: 'email', defaultValue: '' },
      { name: 'password', label: 'Pswd', type: 'password', defaultValue: '' },
    ];
  return (
    <>
    <div className="main scroll-ele snap-y snap-mandatory h-screen overflow-y-scroll bg-stone-300">
      <section className="snap-start text-red bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 1</legend>
          <div className="custom-select text-xl font-bold"> custom select </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`<Select
    options={['first', 'second']}
    onChange={handleSelectChange}
    multiple={false}
    style={{ backgroundColor: '#ffe9c7', font: 'bold 16px Arial, sans-serif', padding: '5px', width:'300px'}}
/>`}
            </SyntaxHighlighter>
            :
            <div className="demo h-fit">
                <Select
                      options={['first', 'second']}
                      onChange={handleSelectChange}
                      multiple={false}
                      style={{ backgroundColor: '#ffe9c7', font: 'bold 16px Arial, sans-serif', padding: '5px', width:'22vw'}}
                  />
                  <p className="text-center">Selected Value: {selectedValue}</p>
              </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 2</legend>
          <div className="custom-select text-xl font-bold"> dynamic form </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`
const formConfig = [
  { name: 'username', label: 'User', type: 'text', defaultValue: '' },
  { name: 'email', label: 'Email', type: 'email', defaultValue: '' },
  { name: 'password', label: 'Pswd', type: 'password', defaultValue: '' },
];
<DynamicForm config={formConfig}/>
`}
            </SyntaxHighlighter>
            :
            <div className="demo h-fit">
              <DynamicForm config={formConfig}/>
            </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 3</legend>
          <div className="custom-input text-xl font-bold"> custom input </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`
const passwordChecker = (value) => {
  if(value.length < 8) {
  return {isValid: false, message: "At least 8 characters"};
  }
  if(!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
  return {isValid: false, message: "At least one special character"};
  }
  if(!/\d/.test(value)) {
  return {isValid: false, message: "At least one numeric character"};
  }
  return {isValid: true, message: "Password is strong"};
}
<Input
  type={"password"}
  placeholder={"write password"}
  validate={passwordChecker}
/>`}
            </SyntaxHighlighter>
            :
            <div className="demo h-fit">
                <Input
                  type={"password"}
                  placeholder={"write password"}
                  validate={passwordChecker}
                />
            </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 4</legend>
          <div className="ff text-xl font-bold"> Flexible filter </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`
<FlexibleFilter
  items={["chennai","mumbai","thanjavur","vellore"]}
/>
`}
            </SyntaxHighlighter>
            :
            <div className="demo h-fit">
              <FlexibleFilter
                items={["chennai","mumbai","thanjavur","vellore"]}
              />
            </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 5</legend>
          <div className="modal text-xl font-bold"> custom modal </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`<Modal
  show={showModal}
  toggleModal={toggleModal}
  title={"Model title"}
  content={"There is some content in it not much though"}
/>`}
            </SyntaxHighlighter>
            :
            <div className="demo">
              <button onClick={toggleModal} className='border-2 border-black border-solid  p-4 bg-amber-700 text-amber-300 cursor-pointer'>Open Modal</button>
            </div>
            }
          </div>
        </fieldset>
      </section>
        <Modal
          show={showModal}
          toggleModal={toggleModal}
          title={"Model title"}
          content={`There is some content in it not much though`}
        ></Modal>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 6</legend>
          <div className="tab text-xl font-bold"> custom tab</div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`<Tab tabs={[
  {label:"item0",content:"item0 content"},
  {label:"item1",content:"item1 things"},
  {label:"item2",content:"item2 stuff"},
]}/>`}
            </SyntaxHighlighter>
            :
            <div className="demo">
              <Tab tabs={[
                {label:"item0",content:"item0 content"},
                {label:"item1",content:"item1 things"},
                {label:"item2",content:"item2 stuff"},
              ]}/>
            </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 7</legend>
          <div className="data-table text-xl font-bold"> data table </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`
<DataTable
data = {[
  {name: "Ram", age:40},
  {name: "Shyam", age:29},
  {name: "Anirudh", age:34}
]}
/>`}
            </SyntaxHighlighter>
            :
            <div className="demo h-fit">
              <DataTable
              data = {[
                {name: "Ram", age:40},
                {name: "Shyam", age:29},
                {name: "Anirudh", age:34}
              ]}
              />  
            </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 8</legend>
          <div className="carousel text-xl font-bold"> custom toast </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`const sucessToast = () => {
  return <Toast success={true} message="Success! toast is posted" duration={3000} />
}
const handleSuccess = () => {
  setSuccess(true);
  setTimeout(() => { 
    setSuccess(false);
  }, 1800);
}

<button onClick={() => handleDanger()} className='cursor-pointer border-2 border-black border-solid p-2 bg-red-400'>danger</button>
`}
            </SyntaxHighlighter>
            :
            <div className="demo grid place-items-center">
              <div className="flex gap-4">
                <button onClick={() => handleDanger()} className='cursor-pointer border-2 border-black border-solid p-2 bg-red-400'>danger</button>
                <button onClick={() => handleSuccess()} className='cursor-pointer border-2 border-black border-solid p-2 bg-green-400'>success</button>
              </div>
              <div className="flex gap-8 pt-4">
                <button onClick={() => handleWarning()} className='cursor-pointer border-2 border-black border-solid p-2 bg-yellow-400'>warning</button>
                <button onClick={() => handleInfo()} className='cursor-pointer border-2 border-black border-solid p-2 bg-cyan-400'>info</button>
              </div>
            </div>
            }
          </div>
          {success && sucessToast()}
          {warning && warningToast()}
          {info && infoToast()}
          {danger && dangerToast()}
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 9</legend>
          <div className="stepper text-xl font-bold"> custom stepper </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`<Stepper 
  steps={["s1","s2","s3", "s4", "s5"]}
  color1={"#faa741"}
  color2={"#fae7cf"}
/>`}
            </SyntaxHighlighter>
            :
            <div className="demo">
              <Stepper 
                steps={["s1","s2","s3"]}
                color1={"#faa741"}
                color2={"#fae7cf"}
              />
            </div>
            }
          </div>
        </fieldset>
      </section>
      <section className="snap-start text-black bg-stone-300 h-[95vh] mb-[5vh] grid">
        <fieldset className="place-items-center border-2 borderr-solid border-black my-20 mx-20">
          <legend className='mx-10 font-bold text-2xl'>Task 10</legend>
          <div className="carousel text-xl font-bold"> custom carousel </div>
          <div className="demo-code relative border-2 border-solid border-black w-[80%] h-[80%] mt-4 rounded-xl grid place-items-center">
            <button className="switch absolute bg-black text-amber-200 rounded-tr-md border-l-6 border-b-6 border-amber-600 top-0 right-0 p-2 cursor-pointer" onClick={() => handleCodeView()}>
              { viewCode ? <span>Demo</span>:<span>Code</span>}
            </button>
            {viewCode ? 
            <SyntaxHighlighter language="javascript" style={dark} className="h-fit w-full">
{`<Carousel 
  images={["/thanjavur.jpg", "thanjavur2.jpg", "/thanjavur3.jpg", "hostel.jpg", "/home.jpg"]}
  width="40vw"
/>`}
            </SyntaxHighlighter>
            :
            <div className="demo grid place-items-center">
              <Carousel 
                images={["/thanjavur.jpg", "thanjavur2.jpg", "/thanjavur3.jpg", "hostel.jpg", "/home.jpg"]}
                width="40vw"
              />
            </div>
            }
          </div>

        </fieldset>
      </section>
      <footer className='footer absolute bottom-0 w-full h-[5vh] grid place-items-center'>
        <div className="attr w-fit h-fit text-amber-200">build by <a href="https://www.chidam.xyz/handles" target='_blank' className='font-bold text-cyan-500'>@chidam</a></div>
      </footer>
    </div>
    </>
  )
}

export default App
