import SuccessCircles from '@ui/components/shared/SuccessCircles'

const SubSuccess = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full gap-6 wrapper_under_header'>
            <SuccessCircles />
            <span className='text-lg font-medium text-center'>Теперь вам доступны все плюсы DM+</span>
        </div>
    )
}

export default SubSuccess