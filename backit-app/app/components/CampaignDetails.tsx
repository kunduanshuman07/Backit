import Image from "next/image";
import SolarImage from "../assets/SolarPanel.jpg";
import SolarImage2 from "../assets/SolarPanel2.jpg";
import SolarImage3 from "../assets/SolarPanel3.jpg";
import AnshumanKundu from "../assets/Anshuman Kundu.jpg"
import { FaVideo } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const CampaignDetails = () => {
    return (
        <div className='p-2 mt-2 flex flex-row w-full'>
            <div className='w-2/3 p-4'>
                <h1 className='font-bold text-sm rounded ml-1'>Description</h1>
                <p className='text-xs mt-2 bg-gray-100 p-4 rounded-lg'>Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.Detailed explanation of the innovative solar panel technology and how it benefits users.</p>
                <h1 className='font-bold text-sm rounded mt-10 ml-1'>Category</h1>
                <p className='text-sm mt-2 bg-gray-100 text-success p-4 rounded-lg font-bold'>Technology</p>
                <h1 className='font-bold text-sm rounded-lg mt-10 ml-1'>Media </h1>
                <div className='flex flex-row p-2 rounded-lg h-1/4'>
                    <div className="flex flex-col w-2/3">
                        <div className="carousel w-full mt-2">
                            <div id="item1" className="carousel-item w-full">
                                <Image
                                    src={SolarImage}
                                    alt="Solar Panel"
                                    width={600}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <Image
                                    src={SolarImage2}
                                    alt="Solar Panel"
                                    width={600}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <Image
                                    src={SolarImage3}
                                    alt="Solar Panel"
                                    width={600}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2 mt-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                        </div>
                    </div>
                    <button className="btn m-auto ml-auto">Watch Video? <FaVideo /></button>

                </div>
                <h1 className='font-bold text-sm rounded mt-10 ml-1'>Campaign Timeline</h1>
                <div className="grid grid-cols-3 gap-4">
                    <p className='text-xs mt-2 bg-gray-200 p-4 rounded-lg font-bold text-center'>May: Finallize Design</p>
                    <p className='text-xs mt-2 bg-gray-200 p-4 rounded-lg font-bold text-center'>June: Prototype Testing</p>
                    <p className='text-xs mt-2 bg-gray-200 p-4 rounded-lg font-bold text-center'>July: Production Begins</p>
                </div>
                <h1 className='font-bold text-sm rounded mt-10 ml-1'>About Project Creator</h1>
                <div className="flex flex-row bg-gray-200 p-4 mt-2 rounded-lg grid grid-cols-4 gap-2">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image
                                src={AnshumanKundu}
                                alt="Solar Panel"
                                className="circle shadow-lg mt-2"
                            />
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                        <h1 className="text-bold bg-neutral text-white p-1 rounded-lg text-xs text-center">Anshuman Kundu</h1>
                        <h1 className="text-bold text-neutral mt-1 rounded-lg text-xs text-center">Software Developer</h1>
                        <h1 className="text-bold text-secondary mt-1 font-bold rounded-lg text-xs text-center">Age - 23</h1>
                        <h1 className="text-bold text-error mt-1 font-bold rounded-lg text-xs text-center">Male</h1>
                    </div>
                    <div className="bg-white p-2 rounded-lg flex flex-col">
                        <h1 className="text-bold bg-neutral text-white p-1 rounded-lg text-xs text-center">Contact</h1>
                        <h1 className="text-bold text-neutral mt-1 rounded-lg text-xs text-center m-auto">Phone - +91 9579130369</h1>
                        <h1 className="text-bold text-secondary mt-1 font-bold rounded-lg text-xs text-center m-auto">kundu4coding@gmail.com</h1>
                    </div>
                    <div className="bg-white p-2 rounded-lg flex flex-col">
                        <h1 className="text-bold bg-neutral text-white p-1 rounded-lg text-xs text-center">Social</h1>
                        <button className="btn btn-xs btn-primary text-white font-bold m-auto">Linkedin <FaLinkedin/></button>
                        <button className="btn btn-xs btn-info text-white font-bold m-auto">Twitter <FaTwitter/></button>
                    </div>
                </div>
            </div>
            <div className='w-1/3 ml-2 flex flex-col'>
                <div className="bg-neutral rounded-lg flex flex-col p-4">
                    <h1 className="font-bold text-accent mt-1 text-center">Funds</h1>
                    <button className="btn btn-xs text-white font-bold btn-info mx-auto mt-2">Goal: $25,000</button>
                    <button className="btn btn-xs mx-auto mt-2">Duration: 01/03/2024 - 01/04/2024</button>
                    <h1 className="text-xs mt-2 text-warning font-bold ">Funding Tiers & Rewards:</h1>
                    <p className="text-white mt-2 text-xs">Tier 1: $25 - Personalized Thank You Email</p>
                    <p className="text-white mt-2 text-xs">Tier 2: $50 - Early Access to Purchase + Tier 1 Reward</p>
                    <p className="text-white mt-2 text-xs">Tier 3: $100 - Limited Edition Solar-Powered Keychain + Tiers 1-2 Rewards</p>
                    <button className="btn btn-error btn-xs text-white font-bold ml-auto mt-2 mr-2 mb-2">Contribute</button>
                </div>
                <div className="bg-neutral rounded-lg flex flex-col p-4 mt-2">
                    <h1 className="font-bold text-accent mt-1 text-center">Terms & Conditions</h1>
                    <p className="text-white mt-2 text-xs">Eligibility: You must be at least 18 years old to use our app. By using our services, you confirm that you are of legal age.</p>
                    <p className="text-white mt-2 text-xs">Contributions: Contributions made to campaigns are non-refundable. Once a contribution is made, it cannot be reversed or refunded.</p>
                    <p className="text-white mt-2 text-xs">Campaign Cancellations: Campaign creators may cancel their campaigns at any time before the funding deadline. In such cases, contributions will be returned to contributors.</p>
                </div>
            </div>
        </div>
    )
}

export default CampaignDetails