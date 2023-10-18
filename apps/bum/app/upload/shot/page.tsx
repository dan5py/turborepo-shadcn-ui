import BlocksSide from './BlocksSide'
import DraftPreview from './DraftPreview'
import Header from './Header'

const UploadPage = () => {
    return (
        <div className='flex flex-col w-full min-h-screen bg-neutral-950'>
            <Header />
            <div className="flex w-full h-full">
                <BlocksSide />
                <div className="flex flex-col w-full h-full overflow-y-auto">
                    <DraftPreview />
                </div>
                <div className="flex flex-col h-full gap-4 p-4 w-96 shrink-0">
                    <div className="flex items-center justify-center w-full h-fit">
                        <span className='text-sm text-center text-neutral-300'>Инструменты</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage