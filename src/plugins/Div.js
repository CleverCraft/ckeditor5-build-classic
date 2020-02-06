import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class Div extends Plugin {
	init() {
		const editor = this.editor;

		editor.model.schema.register( 'div', {
			inheritAllFrom: '$block',
			allowAttributes: [ 'id', 'class' ],
			isBlock: true,
		} );
		editor.conversion.elementToElement( { model: 'div', view: 'div' } );
		editor.conversion.attributeToAttribute( { model: 'class', view: 'class' } );
		editor.conversion.attributeToAttribute( { model: { name: 'div', key: 'id' }, view: 'id' } );
	}
}
