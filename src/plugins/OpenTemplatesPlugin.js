import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import layoutIcon from '../assets/layout.svg';

export default class OpenTemplatesPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'openTemplates', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Open templates',
				icon: layoutIcon,
				tooltip: true
			} );
			view.on( 'execute', () => {
				const config = editor.config.get( 'templateBlock' );
				if ( config && config.openFn ) {
					config.openFn();
				}
			} );
			return view;
		} );
	}
}
