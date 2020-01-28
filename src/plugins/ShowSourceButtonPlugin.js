import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import sorcePageIcon from '../assets/source-page.svg';

export default class ShowSourceButtonPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'showSource', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Show source',
				icon: sorcePageIcon,
				tooltip: true
			} );
			view.on( 'execute', () => {
				const config = editor.config.get( 'sourceButtonActions' );
				if ( config && config.click ) {
					config.click();
				}
			} );
			return view;
		} );
	}
}
