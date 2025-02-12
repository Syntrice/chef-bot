import brandImageURL from '@/assets/chef-claude-icon.png'

export default () => (
    <div className='flex items-center gap-5'>
        <img width={50} src={brandImageURL} alt="A stencil drawing of a robot chef." />
        <h1 className='text-4xl'>Chef Claude</h1>
    </div>
)