import { Play, Expand, Download, X } from 'lucide-react'
const ModelImagePopup = ({ open, onClose, imageURL, currentIndex, totalImages }: { open: boolean, onClose: () => void, imageURL: string | null, currentIndex: number, totalImages: number }) => {
    return (
        <div className={`fixed inset-0 z-[1000] bg-white ${open ? 'block' : 'hidden'}`}>
            {/* total image number */}
            <div className='absolute sm:top-3 top-2 text-sm sm:left-7 left-4 text-gray-400'>
                <Play className='w-4 h-4 inline-block mr-4' />
                <span>{currentIndex + 1}</span>/<span>{totalImages}</span>
            </div>
            <div className='w-full h-full grid place-items-center'>
                <figure className='max-w-[403px] h-[605px]'>
                    <img src={imageURL || "https://i.pinimg.com/564x/66/ca/88/66ca888aadad4787e40810e984a53600.jpg"} alt="Mdel image" className='h-full w-full object-cover' />
                </figure>
            </div>            {/* handle button */}
            <div className='absolute sm:top-3 top-2 sm:right-7 right-4 flex items-center gap-4 text-gray-400'>
                {/* zoom */}
                <button><Expand className='w-4 h-4' /></button>
                {/* export */}
                <button><Download className='w-4 h-4' /></button>
                {/* close */}
                <button onClick={onClose}><X className='w-6 h-6' /></button>
            </div>
        </div>
    )
}
export default ModelImagePopup