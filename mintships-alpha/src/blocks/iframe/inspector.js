/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, TextControl, ToggleControl, ColorPicker} = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

    render() {
        const { attributes, setAttributes } = this.props;

        return (
            <InspectorControls key="inspector">
                <PanelBody title={ __( 'Settings', 'mintships-alpha' ) } >
                    <TextControl
                        label={  __('Lock code', 'mintships-alpha') }
                        value={ attributes.iframeSrc }
                        onChange={ ( value ) => { setAttributes( {iframeSrc: value } ) } }
                    />
                    <ToggleControl
                        label={ __('Allow fullscreen', 'mintships-alpha') }
                        checked={ attributes.allowFullscreen }
                        onChange={ ( value ) => { setAttributes( {allowFullscreen: value } ) } }
                    />
                    <ToggleControl
                        label={ __('Show Scrollbar', 'mintships-alpha') }
                        checked={ attributes.showScrollbar }
                        onChange={ ( value ) => { setAttributes( {showScrollbar: value } ) } }
                    />                    
                    <ToggleControl
                        label={ __('Add lazyload attribute', 'mintships-alpha') }
                        checked={ attributes.useLazyload }
                        onChange={ ( value ) => { setAttributes( {useLazyload: value } ) } }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Style options', 'mintships-alpha' ) } initialOpen={ false } >
                    <label style={{marginBottom: "3px"}}>{ __('Background color', 'mintships-alpha') }</label>
                    <ColorPicker
                        color={ attributes.backgroundColor }
                        copyFormat="hex"
                        onChangeComplete={ (value) => { setAttributes({backgroundColor: value.hex }) } }
                    />
                    <TextControl
                        label={ __('Width', 'mintships-alpha') }
                        value={ attributes.iframeWidth }
                        onChange={ ( value ) => { setAttributes( {iframeWidth: value } ) } }
                    />
                    <TextControl
                        label={ __('Height', 'mintships-alpha') }
                        value={ attributes.iframeHeight }
                        onChange={ ( value ) => { setAttributes( {iframeHeight: value } ) } }
                    />
                    <ToggleControl
                        label={ __('Use !important', 'mintships-alpha') }
                        checked={ attributes.useImportant }
                        onChange={ ( value ) => { setAttributes( {useImportant: value } ) } }
                    />
                </PanelBody>
            </InspectorControls>
        );
    }

}
