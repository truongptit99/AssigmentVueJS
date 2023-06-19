export default {
    template: `
        <button :class="{
            'btn': true,
            'btn-primary': type === 'primary',
            'btn-secondary': type === 'secondary',
            'is-loading': processing
        }" :disabled="processing">
            <slot/>    
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}