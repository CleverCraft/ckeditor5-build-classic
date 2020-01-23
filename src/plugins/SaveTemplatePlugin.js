import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import columnIcon from '../assets/column.svg';

export default class SaveTemplatePlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'saveTemplate', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Save template',
				icon: columnIcon,
				tooltip: true
			} );
			view.on( 'execute', () => {
				const config = editor.config.get( 'templateBlock' );
				if ( config && config.saveFn ) {
					config.saveFn();
				}
			} );
			return view;
		} );
	}
}
