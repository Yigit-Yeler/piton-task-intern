import { imgUrls } from '../constants/imgUrls';
import { inputs } from '../constants/inputs';
import { texts } from '../constants/texts';

function ProposalFormSection() {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center bg-gray-100 p-10">
            <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                <img
                    src={imgUrls.SIDE_IMG}
                    alt="Side Image"
                    className="h-full w-3/5 object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-right text-3xl font-bold mb-9">{texts.PROPOSAL_FORM_TITLE}</h2>
                <form className="flex flex-col space-y-6">
                    {
                        inputs.map((item) => {
                            if (item.tag === "input") {
                                return (
                                    <input
                                        key={item.placeholder}
                                        type="text"
                                        placeholder={item.placeholder}
                                        className="p-4 border border-black rounded text-lg placeholder-gray-700"
                                    />
                                )
                            }
                            else if (item.tag === "textarea") {
                                return (
                                    <textarea
                                        key={item.placeholder}
                                        placeholder={item.placeholder}
                                        className="p-4 border border-black rounded text-lg h-32 resize-none placeholder-gray-700"
                                    ></textarea>
                                )
                            }
                        })
                    }

                    <button className="bg-black text-white p-4 text-lg mt-4 rounded">
                        {texts.FORM_BUTTON_TEXT}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProposalFormSection