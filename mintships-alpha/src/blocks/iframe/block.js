
import './style.scss';
import './editor.scss';
import Inspector from './inspector';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Placeholder } = wp.components;
const { registerBlockType } = wp.blocks;


registerBlockType( 'mintships/mintships-alpha', {

	title: __( 'Mintships', 'mintships-alpha' ),
	description: __('Enable the use of membership/ticket NFTs in physical spaces and allow sharing unlockable content possible and easy for all creators.', 'mintships-alpha'),
	keywords: [ __( 'nft' ),__( 'erc20' ),__( 'blockchain' ),__( 'erc721' ),__( 'erc1155' ),__( 'qrcode' ),__( 'ticket' ),__( 'membership' ),__( 'external' )],
	category: 'embed',
	icon: 'lock',

	supports: {
		anchor: true,
		className: false,
		customClassName: true,
		align: ['full'],
	},

	attributes: {
		iframeSrc: {
			type: 'string',
		},
		iframeWidth: {
			type: 'string',
		},
		iframeHeight: {
			type: 'string',
		},
		allowFullscreen: {
			type: 'boolean',
		},
		showScrollbar: {
			type: 'boolean',
		},
		useLazyload: {
			type: 'boolean',
		},
		useImportant: {
			type: 'boolean',
		},
		backgroundColor: {
			type: 'object',
		},
	},

	edit: function( props ) {

		const { attributes } = props;

		let customClassName = [attributes.className];
		if(attributes.align == 'full') customClassName.push('alignfull');

        const iframeStyle = {
            width: attributes.iframeWidth || '100%',
            maxWidth: attributes.iframeWidth || '100%',
            height: attributes.iframeHeight || '733px',
			overflow: !attributes.showScrollbar ? 'hidden' : 'auto',
			backgroundColor: attributes.backgroundColor || '#ffffff',
        };

        let allow = {};
        if(attributes.allowFullscreen) allow.allowFullscreen = true;

        const block = attributes.iframeSrc
			? <iframe
				id={ attributes.anchor }
				className={ customClassName.join(' ') }
				src={ `https://app.mintships.xyz/${attributes.iframeSrc}?bg=${`${attributes.backgroundColor || '#ffffff'}`.replace('#','')}` }
				style={ iframeStyle }
				frameBorder="0"
				scrolling={!attributes.showScrollbar ? "no" : "yes"}
				{ ...allow }
				></iframe>
			: <Placeholder
				icon="lock"
				label={ __('Please fill the lock code', 'mintships-alpha') }
				/>;

        return (
			<Fragment>
				<Inspector { ...props } />
				{ block }
			</Fragment>
		);
	},

	save: function( props ) {

		const { attributes } = props;

		let customClassName = [attributes.className];
		if(attributes.align == 'full') customClassName.push('alignfull');

        const iframeStyle = {
            width: attributes.iframeWidth || '100%',
            maxWidth: attributes.iframeWidth || '100%',
            height: attributes.iframeHeight || '733px',
			overflow: !attributes.showScrollbar ? 'hidden' : 'auto' 
        };

        if(attributes.useImportant){
        	for(let i in iframeStyle){ iframeStyle[i] += ' !important'; }
		}

        let allow = {};
        if( attributes.allowFullscreen ) allow.allowFullscreen = true;

        return (
            <Fragment>
                <iframe
                    style={ iframeStyle }
					id={ attributes.anchor }
                    src={ `https://app.mintships.xyz/${attributes.iframeSrc}?bg=${`${attributes.backgroundColor || '#ffffff'}`.replace('#','')}` }
					class={ customClassName.join(' ') }
					loading={ attributes.useLazyload ? 'lazy' : false}
                    frameBorder="0"
					scrolling={!attributes.showScrollbar ? "no" : "yes"}
                    { ...allow }
                ></iframe>
            </Fragment>
        );
	},

} );
